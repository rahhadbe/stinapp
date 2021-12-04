package com.gee.geeStayService.service;

import com.gee.geeStayService.entity.Employee;
import com.gee.geeStayService.entity.Feedback;
import com.gee.geeStayService.entity.FeedbackDet;
import com.gee.geeStayService.entity.Question;
import com.gee.geeStayService.repo.QuestionRepo;
import com.gee.geeStayService.repo.EmployeeRepo;
import com.gee.geeStayService.repo.FeedbackRepo;
import com.gee.geeStayService.repo.FeedbackRepoDet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.google.cloud.language.v1.Sentiment;
import com.google.cloud.language.v1.LanguageServiceClient;
import com.google.cloud.language.v1.Document;
import com.google.cloud.language.v1.AnalyzeSentimentResponse;
import com.google.cloud.language.v1.Document.Type;

import java.io.IOException;
import java.util.*;


@Service
public class GeeStayService {

    @Autowired
    private EmployeeRepo employeeRepo;

    @Autowired
    private FeedbackRepo feedbackRepo;

    @Autowired
    private FeedbackRepoDet feedbackRepoDet;

    @Autowired
    private QuestionRepo questionRepo;

    public void initiate(Employee employee){
        employeeRepo.save(employee);
    }

    public Employee getEmployee(String email) {
        return employeeRepo.getEmployeeByEmail(email);
    }

    public List <Question> getQuestion() {
        return questionRepo.findAll();
    }

    public List <Feedback> getFeedback(String email) {
        return feedbackRepo.findByEmployeeemail(email);
    }

    public List <FeedbackDet> getFeedbackDet(Long id) {
        return feedbackRepoDet.getFeedbackById(id);
    }

    /** Identifies the sentiment in the string {@code text}. */
    public Sentiment analyzeSentimentText(String text) throws IOException {
        // [START language_sentiment_text]
        // Instantiate the Language client com.google.cloud.language.v1.LanguageServiceClient
        LanguageServiceClient language = LanguageServiceClient.create();
        Document doc = Document.newBuilder().setContent(text).setType(Type.PLAIN_TEXT).build();
        AnalyzeSentimentResponse response = language.analyzeSentiment(doc);
        Sentiment sentiment = response.getDocumentSentiment();
        if (sentiment == null)
        {
                System.out.println("No sentiment found");
        }
        else
        {
                System.out.printf("Sentiment magnitude: ", sentiment.getMagnitude());
                System.out.printf("Sentiment score: ", sentiment.getScore());
        }
        return sentiment;
        // [END language_sentiment_text]
    }

    public void save(HashMap <String, HashMap<String, String>> feedbackResponse) {
        for (String email : feedbackResponse.keySet()) {

            Feedback f = new Feedback();
            f.setFeedbackList(new ArrayList<>());
            f.setEmployeeemail(email);
            f.setManageremail(employeeRepo.getEmployeeByEmail(email).getManageremail());
            f.setCapturedate(new Date());
            int[] sent_arr;
            sent_arr = new int[4];
            String ov_sent = null;
            //0 - Negative, 1 - Neutral, 2 - Mixed, 3 - Positive, 4 - No Sentiment Found

            for (String questionid : feedbackResponse.get(email).keySet())
            {
                Float sentscore = null;
                Float sentmag   = null;
                String ressent = null;
                FeedbackDet fd = new FeedbackDet();
                fd.setQuestionid(Long.parseLong(questionid));
                fd.setQuestioncategory(feedbackRepoDet.getById(Long.parseLong(questionid)).getQuestioncategory());
                fd.setQuestioncontent(feedbackRepoDet.getById(Long.parseLong(questionid)).getQuestioncontent());
                fd.setResponse(feedbackResponse.get(email).get(questionid));
                try
                {
                    System.out.printf("Call to Sentiment method ");
                    System.out.printf("Response ", feedbackResponse.get(email).get(questionid));
                    Sentiment sen = analyzeSentimentText(feedbackResponse.get(email).get(questionid));
                    System.out.printf("Sentiment magnitude: ", sen.getMagnitude());
                    System.out.printf("Sentiment magnitude: ", sen.getScore());
                    if (sen == null) {
                        System.out.printf("Sentiment is null");
                        ressent = "No Sentiment Found";
                        sent_arr[4] = sent_arr[4] + 1;
                    }
                    else
                    {
                        sentscore = sen.getScore();
                        sentmag = sen.getMagnitude();
                        System.out.printf("Sentiment is not null");
                        if (sentscore < 0) {
                            ressent = "Negative";
                            sent_arr[0] = sent_arr[0] + 1;
                        } else if (sentscore >= 0.0 & sentscore < 0.5) {
                            if (sentmag >= 0.0 & sentmag <= 2.0) {
                                ressent = "Neutral";
                                sent_arr[1] = sent_arr[1] + 1;
                            } else //magnitude > 2.0
                            {
                                ressent = "Mixed";
                                sent_arr[2] = sent_arr[2] + 1;
                            }
                        } else {
                            ressent = "Positive";
                            sent_arr[3] = sent_arr[3] + 1;
                        }

                    }
                }
                catch (IOException e) {
                    e.printStackTrace();
                }

                fd.setSentimentscore(ressent);
                fd.setFeedback(f);
                f.getFeedbackList().add(fd);
            }

            int i;
            // Initialize maximum element
            int max = sent_arr[0];
            int j = 0;
            for (i = 1; i < sent_arr.length; i++)
                if (sent_arr[i] > max) {
                    max = sent_arr[i];
                    j = i;
                }

            if (j == 0)
            {
                ov_sent = "Negative";
            }
            else if (j == 1){
                ov_sent = "Neutral";
            }
            else if (j == 2)
            {
                ov_sent = "Mixed";
            }
            else if (j == 3)
            {
                ov_sent = "Positive";
            }
            else
            {
                ov_sent = "No Sentiment Found";
            }
            f.setAggsentiment_score(ov_sent);
            feedbackRepo.save(f);
        }

    }

}
