import { Injectable } from '@angular/core';
import { MontyHall } from '../model/montyhall';
// import { HttpClientModule, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class MontyHallService {
  objMontyHall = new MontyHall();
  // constructor(private httpclient: HttpClient) { } // Inject Httpclient in the constructor so that it can be used to hit api later
  constructor() { }

  MontyHallPick(changeDoor: boolean,totalSimulation:number):MontyHall 
  {
    //pickdoor: number,changedoor: boolean,randomcardoor:number,doorchosenbyhost:number,totalsimulation:number
    let wins: number;
    wins = 0;
    let losses: number;
    losses = 0;
    let result:boolean;
    let switchDoor: number;
    switchDoor = changeDoor == true ? 1 : 0;

    for (let index = 0; index < totalSimulation; index++) {
      /*
        changedoor:
        0 = no, contestant chose to stay with the initial pick,
        after the offer to switch
        1 = yes, contestant chose to switch doors after the 
        disclosure of the goat door 
      */
      /*
        Calculate the probability to win the car by the contestant on either 
        staying or switching the choice
        the contestant initiall pick the door
        random pickeddoor: 0,1 or 2 for the door
        changedoor:0 = no, 1 = yes.
        The Contenstant decides to change the selection after disclosure of goat door
        random goatdoortoremove : 0= left door  or 1 = right door
        Monty discloses 1 incorrect door , this value indicates based on random choice by program
      */      
    result = this.getMontyHallWins(this.getRandomInt(3),switchDoor,this.getRandomInt(3),this.getRandomInt(1))

      if(result)
        wins++;
      else
        losses++;
     
    }
    debugger;
    

    this.objMontyHall.wins = wins;
    this.objMontyHall.losses = losses;
    return this.objMontyHall;
  }

  getRandomInt(max) : number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getMontyHallWins(pickedDoor:number,changeDoor: number, carDoor: number, gootdoorToRemove: number):boolean
  {
    let win: boolean = false;
    let leftGoat = 0;
    let rightGoat = 2;
    let KeepGoat:number;
    /*remove one of the goad doors
      not the one picked by contestant*/
    switch(pickedDoor)
    {
      case 0: leftGoat = 1 ; rightGoat = 2; break;
      case 1: leftGoat = 0 ; rightGoat = 2; break;
      case 2: leftGoat = 0 ; rightGoat = 1; break;
    }
    KeepGoat = gootdoorToRemove == 0 ? rightGoat : leftGoat; // either of the goat doors one of that needs to be kept to make choice later
    // If door is not changed and the cardoor is same as the picked door
    if(changeDoor == 0)// if there is no switch after picking door once
    {
        win = carDoor == pickedDoor;
    }
    else
    {
        // If the door is changed and the cardoor is not equal to the keepgoat.
        win = carDoor != KeepGoat;
    }
    return win;
  }

  // getMontyHallPick(simulations:number,switchdoor:bool) // Method that can be used in order to hit the api
  // {
  //   return this.httpClient.get('http://localhost:59639/api/montyhall?simulations='+simulations+'&switchdoor='+switchdoor+'')
  // }

}
