import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  user_records:any[]=[]

   data = {
    email: "email",
    password :"password"

  }

doLogin(values:any){
this.user_records = JSON.parse(localStorage.getItem("users")||'[]')
if(this.user_records.some((v)=>{
  return v.email==this.data.email && v.password== this.data.password

})){
  alert("Login Sucessfull");
  this.router.navigate(['/'])

}
else{
alert("Login Failed")
}

}
}
