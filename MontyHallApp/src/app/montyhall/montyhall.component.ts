import { Component, OnInit } from '@angular/core';
import {MontyHallService} from '../service/monty-hall.service'
import {MontyHall} from '../model/montyhall';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-montyhall',
  templateUrl: './montyhall.component.html',
  styleUrls: ['./montyhall.component.css']
})

export class MontyhallComponent implements OnInit {
  angform: FormGroup;
  objMontyHall = new MontyHall();
  submitted = false;
  wins:number;
  losses:number;
  changedoor: boolean;
  simulations: number;

  constructor(private montyhallservice: MontyHallService,private fb: FormBuilder) { 
      
  }

  ngOnInit(): void {
    this.angform = this.fb.group({
      simulations: ['', Validators.required],
      changedoor: [false]
    });
//      this.calculateMontyHallPick(this.changedoor,this.simulations);
  }

  get f() { return this.angform.controls; } // get access to all controls
  // createForm()
  // {
   
  // }

  onSubmit()
  {
    debugger;
    this.submitted= true;
    this.objMontyHall = this.calculateMontyHallPick(this.f.changedoor.value,this.f.simulations.value);
  }

  calculateMontyHallPick(changedoor: boolean,totalsimulation:number) : MontyHall
  {
      return this.montyhallservice.MontyHallPick(changedoor,totalsimulation);
  }

  //Method that can be used to call API
  // calculateMontyHallPick(changedoor: boolean,totalsimulation:number) : MontyHall
  // {
  //   this.montyhallservice.getMontyHallWins().subscribe((data)=>{
  //     console.log(data);
  //     this.objMontyHall.simulations = data['simulations'];
  //     this.objMontyHall.wins = data['wins'];
  //     this.objMontyHall.losses = data['losses'];
  //   });
  //   return this.objMontyHall;
  // }
  

}
