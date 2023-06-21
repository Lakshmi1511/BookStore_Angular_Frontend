import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm=this.fb.group({

    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    mobile:['',[Validators.required,Validators.pattern(/^\d{10}$/)]],
    email:['',[Validators.required,Validators.email]]
    
    })
    constructor(private fb:FormBuilder,private api:ApiService,private registerRouter:Router){}

  ngOnInit(): void {
  }
  register(){
    
    var email=this.registerForm.value.email
    var uname=this.registerForm.value.uname
    var pwd=this.registerForm.value.pwd
    var mobile=this.registerForm.value.mobile

    if(this.registerForm.valid){  
      this.api.register(uname,pwd,mobile,email).subscribe(
        (result:any)=>{
        alert(result.message)
        this.registerRouter.navigateByUrl('login')
      },
      result=>{
        alert(result.error.message)
        this.registerRouter.navigateByUrl('login')
      }
        
      )
      }
    else
    {
      alert("invalid form")
    } 
  }  

}
