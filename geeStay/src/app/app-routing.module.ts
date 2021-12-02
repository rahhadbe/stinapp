import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { InitiateViewComponent } from './components/initiate-view/initiate-view.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [{path:'', component:AdminViewComponent},
{path:'admin', component:AdminViewComponent},
{path:'initiate', component:InitiateViewComponent},
{path:'view', component:ViewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
