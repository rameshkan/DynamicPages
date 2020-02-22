import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { ChildPageList } from '../childPage.service';

@Component({
  selector: 'app-my-master-page',
  templateUrl: './my-master-page.component.html',
  styleUrls: ['./my-master-page.component.scss']
})
export class MyMasterPageComponent implements OnInit, OnDestroy {
  componentRef: any;
  @ViewChild('childPage', { read: ViewContainerRef , static: false}) viewContainerRef: ViewContainerRef;
  
  constructor(private myService: ChildPageList, private resolver: ComponentFactoryResolver) { }
    
  ngOnInit() {
  }

  loadChildPage(dynamicCompName: string)
  {

    let pages = this.myService.getListofChildPages();
    let page = pages.filter(a=> a.ComponentName == dynamicCompName)[0];
 
    this.viewContainerRef.clear();
    let componentFactory = this.resolver.resolveComponentFactory(page.PageComponent);
    this.componentRef = this.viewContainerRef.createComponent(componentFactory);
   }
  
  ngOnDestroy() {
      this.componentRef.destroy();
  }

}
