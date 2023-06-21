import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[A-Z,a-z]+')]],
    pwd:['',[Validators.required,Validators.pattern('[0-9]+')]]
  })
  constructor(private router:Router,private api:ApiService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  login(){
    // var uname=this.loginForm.value.uname
    
    // var pwd=this.loginForm.value.pwd
    //var userDetails=this.userDetails

    if(this.loginForm.valid){
      var path=this.loginForm.value
      this.api.loginApi(path.uname,path.pwd).subscribe((result:any)=>{
        localStorage.setItem('token',JSON.stringify(result.token));
        alert(result.message)
        this.router.navigateByUrl('home')
        
        localStorage.setItem('currentUser',JSON.stringify(result.currentUser));
       localStorage.setItem('currentPwd',JSON.stringify(result.currentPwd));
        
      },
      result=>{
        alert(result.error.message)
      })

   }
   else{
    alert('invalid form')
   }
  //  this.router.navigateByUrl('home')
  }
}
