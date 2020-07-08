import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MontyhallComponent } from './montyhall.component';
import { MontyHallService } from '../service/monty-hall.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


describe('MontyhallComponent', () => {
  let component: MontyhallComponent;
  let fixture: ComponentFixture<MontyhallComponent>;
  let service: MontyHallService;
  let formbuilder: FormBuilder;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontyhallComponent ],
      providers:[MontyHallService,FormBuilder,Validators]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontyhallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
