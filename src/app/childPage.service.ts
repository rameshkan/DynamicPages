import { DynamicChildPage } from './childPage.manifest';
import { MyBlogPageComponent } from './my-master-page/my-blog-page/my-blog-page.component';
import { MyProfilePageComponent } from './my-master-page/my-profile-page/my-profile-page.component';
import { MyWorkPageComponent } from './my-master-page/my-work-page/my-work-page.component';
import { Injectable } from '@angular/core';

@Injectable()
export class ChildPageList {
    constructor()
    {

    }
    getListofChildPages()
    {
       let pages : Array<DynamicChildPage> = [ 
                {ComponentName : "MYPROFILE", PageComponent : MyBlogPageComponent, DisplayName: "Load my Blog"}, 
                {ComponentName : "MYBLOG", PageComponent : MyProfilePageComponent, DisplayName: "Load my Profile"}, 
                {ComponentName : "MYWORK", PageComponent : MyWorkPageComponent, DisplayName: "Load my Work"}, 
            ]
         return pages;    

    }
}