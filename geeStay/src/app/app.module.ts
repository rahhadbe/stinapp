import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { InitiateViewComponent } from './components/initiate-view/initiate-view.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ViewComponent } from './components/view/view.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastsContainer } from './util/ToastsContainer';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    SideNavComponent,
    AdminViewComponent,
    InitiateViewComponent,
    ViewComponent,
    ToastsContainer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
