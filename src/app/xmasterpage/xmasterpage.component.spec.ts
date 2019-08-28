import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XMasterpageComponent } from './xmasterpage.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('XmasterpageComponent', () => {
  let component: XMasterpageComponent;
  let fixture: ComponentFixture<XMasterpageComponent>;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XMasterpageComponent ],
      imports: [ RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XMasterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create XmasterpageComponent', () => {
    expect(component).toBeTruthy(); 
  });
});
