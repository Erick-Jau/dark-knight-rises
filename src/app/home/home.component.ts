import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public name;
  public lastname;

  constructor(
    public router:Router,
    private api: ApiService

  ) { }

  ngOnInit(): void {
  }



  
  postMethod(name, lastname) {
    let dataToSend = {
      "firstname": name,
      "lastname": lastname
    }
    //if is not get you dont use "data"
    this.api.postToAPi(dataToSend).subscribe((response) => {
      let _response;
      _response = response;
      alert(_response.message);

    })

  }

  getMethod() {
    this.api.getFromApi().subscribe((response) => {
      let _response;
      _response = response;
      alert(_response.message);

    })

  }

}


