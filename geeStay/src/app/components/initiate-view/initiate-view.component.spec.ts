import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiateViewComponent } from './initiate-view.component';

describe('InitiateViewComponent', () => {
  let component: InitiateViewComponent;
  let fixture: ComponentFixture<InitiateViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitiateViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
