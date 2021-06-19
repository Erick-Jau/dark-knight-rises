import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-aspirants',
  templateUrl: './aspirants.component.html',
  styleUrls: ['./aspirants.component.css']
})
export class AspirantsComponent implements OnInit {

  public aspirant;
  public email;
  public password;

  constructor(
    public router:Router

  ) { }

  ngOnInit(): void {

  }

  registerFunction(aspirant, email, password){
    if(aspirant.length > 20){
      alert("Aspirant is too long");
    }else if(email.length > 50){
      alert("email is too long")
    }else if(password.length <= 7){
      alert("password need at least 8 characters")
    }else{
      alert("aspirant:"+ aspirant + "email"+ email + "password: " + password)
      this.router.navigate(["home"]);
    } 
  }

}
