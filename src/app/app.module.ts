import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyMasterPageComponent } from './my-master-page/my-master-page.component';
import { MyProfilePageComponent } from './my-master-page/my-profile-page/my-profile-page.component';
import { MyBlogPageComponent } from './my-master-page/my-blog-page/my-blog-page.component';
import { MyWorkPageComponent } from './my-master-page/my-work-page/my-work-page.component';
import { ChildPageList } from './childPage.service';

@NgModule({
  declarations: [
    AppComponent,
    MyMasterPageComponent,
    MyProfilePageComponent,
    MyBlogPageComponent,
    MyWorkPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ChildPageList],
  bootstrap: [AppComponent],
  entryComponents: [ MyProfilePageComponent,
    MyBlogPageComponent,
    MyWorkPageComponent]
})
export class AppModule { }
