import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XMasterpageComponent } from './xmasterpage.component';

describe('XmasterpageComponent', () => {
  let component: XMasterpageComponent;
  let fixture: ComponentFixture<XMasterpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XMasterpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XMasterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
