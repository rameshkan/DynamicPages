import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMasterPageComponent } from './my-master-page.component';

describe('MyMasterPageComponent', () => {
  let component: MyMasterPageComponent;
  let fixture: ComponentFixture<MyMasterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMasterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMasterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
