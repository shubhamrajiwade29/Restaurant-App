import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert:boolean = false;
  email: string;
  password: string;


  constructor(private resto:CommonService, private router:Router) { }

  ngOnInit(): void {
  }
  logIn(){
    if(this.email == "admin@gmail.com" && this.password == "admin@123")
    {
      this.router.navigate(["/list"])
    }
    else{
      alert("Please Enter Valid Details");
    }
  }
}
