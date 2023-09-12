import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  user_Records :any []=[];
  data = {
    email :"",
    password :"",
    number :""
  }

  doRegister(values:any){
    this.user_Records = JSON.parse(localStorage.getItem("users")||'[]');
    if(this.user_Records.some((v) =>{
      return v.email == this.data.email
    }))
    {
      alert("Dublicate Data")
    }
    else{
      this.user_Records.push(this.data);
      localStorage.setItem("users", JSON.stringify(this.user_Records));
      this.router.navigate(["/login"])
    }
    
  }
 
  

  

}
