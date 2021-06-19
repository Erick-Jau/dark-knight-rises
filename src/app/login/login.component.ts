import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public password = "";
  public username = "";
  public correctPassword="password";
  public correctUsername="username";

  constructor(
    public router:Router
  ) { }

  ngOnInit(): void {
  }

  public loginFunction(username, password){
  if(this.username == this.correctUsername && this.password == this.correctPassword){
    alert("Hello, ur password is corect");
    this.router.navigate(["home"]);
  }else{
    alert("Ur password is incorrect")
  }
  }

}
