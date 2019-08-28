import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from '../services/api.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {

    let injector: TestBed;
    let service: ApiService;
    let httpMock: HttpTestingController;
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create SearchComponent', () => {
    expect(component).toBeTruthy();
  });

  it('urlSearchAirline should correct', () => {
    expect(component.urlSearchAirline).toEqual('http://localhost:8081/api/Airline/SearchAirline');
  });

  it('urlShortestPath should correct', () => {
    expect(component.urlShortestPath).toEqual('http://localhost:8081/api/Airline/ShortestPath');
  });

  it('urlGetAllRoute should correct', () => {
    expect(component.urlGetAllRoute).toEqual('http://localhost:8081/api/Airline/allRoute');
  });

  it('should create SearchComponent', () => {
    expect(component).toBeTruthy();
  });

});
