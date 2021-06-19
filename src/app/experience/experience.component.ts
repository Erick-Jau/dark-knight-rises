import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  public firstJob;
  public secondJob;
  public thirdJob;
  public corporateEmail;
  public personalEmail;
  public phonenumber;

  constructor(
    public router:Router

  ) { }

  ngOnInit(): void {
  }

  experienceFunction(firstJob, secondJob, thirdJob, corporateEmail, personalEmail, phonenumber){
    if(firstJob.length > 20){
      alert("Firstjob is too long");
    }else if(secondJob.length > 20){
      alert("second is too long")
    }else if(thirdJob.length > 20){
      alert("thirdjob is too long")
    }else if(corporateEmail.length > 20){
      alert("corporateemail is too long")
    }else if(personalEmail.length > 20){
      alert("personalemail is too long")
    }else if(phonenumber.length > 20){
      alert("phonenumber is too long")
    }else{
      alert("FirstJob:"+ firstJob + "secondJob:"+ secondJob + "ThirdJob: " + thirdJob + "corporateEmail:" + corporateEmail + "personalEmail:" + personalEmail + "phonenumber" + phonenumber)
      this.router.navigate(["home"]);
    } 
  }


}
