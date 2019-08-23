import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmasterpageComponent } from './xmasterpage.component';

describe('XmasterpageComponent', () => {
  let component: XmasterpageComponent;
  let fixture: ComponentFixture<XmasterpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmasterpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmasterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
