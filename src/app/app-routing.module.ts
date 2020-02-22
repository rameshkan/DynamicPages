import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyMasterPageComponent } from './my-master-page/my-master-page.component';

 
const routes: Routes = [
  { path: 'Master', component: MyMasterPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
