import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MontyHallService } from './monty-hall.service';

describe('MontyHallService', () => {
  let service: MontyHallService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule], providers:[MontyHallService]});
    service = TestBed.get(MontyHallService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate wins for 100000 simulations on door change', () =>
  {
    service = new MontyHallService();
    var value = service.MontyHallPick(true,100000);
    expect(value.wins).toBeGreaterThan(66000);
  });  

  it('should calculate losses for 100000 simulations on door change', () =>
  {
    service = new MontyHallService();
    var value = service.MontyHallPick(true,100000);
    expect(value.losses).toBeGreaterThan(33000);
  });

  it('should calculate wins for 100000 simulations  on staying with same choice', () =>
  {
    service = new MontyHallService();
    var value = service.MontyHallPick(false,100000);
    expect(value.wins).toBeGreaterThan(33000);
  });

  
  it('should calculate losses for 100000 simulations on staying with same choice', () =>
  {
    service = new MontyHallService();
    var value = service.MontyHallPick(false,100000);
    expect(value.losses).toBeGreaterThan(66000);
  });

  it('should check probabity of wins are more on door change in Monty Hall Service', () =>
  {
    service = new MontyHallService();
    var value = service.MontyHallPick(true,100000);
    expect(value.wins).toBeGreaterThan(value.losses);
  });

  it('should check probabity of losses are more with staying on same choice in Monty Hall Service', () =>
  {
    service = new MontyHallService();
    var value = service.MontyHallPick(false,100000);
    expect(value.losses).toBeGreaterThan(value.wins);
  });

  // it('should atleast expect atleast one response', () =>
  // {
  //   const req = httpMock.expectOne('http://localhost:59639/api/montyhall?simulations=1000&switchdoor=true');
  //   expect(req.request.method).toEqual('GET');
  // });

});
