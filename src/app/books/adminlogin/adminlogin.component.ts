import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  adminLoginForm = this.fb.group({
    adminName:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    adminPswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })
    
  constructor(private fb:FormBuilder,private api:ApiService,private adminRouter:Router) { }

  ngOnInit(): void {
  }
  adminLogin(){
    // var uname=this.loginForm.value.uname
    
    // var pwd=this.loginForm.value.pwd
    //var userDetails=this.userDetails

    if(this.adminLoginForm.valid){
      var path=this.adminLoginForm.value
      this.api.adminLogin(path.adminName,path.adminPswd).subscribe((result:any)=>{
        localStorage.setItem('token',JSON.stringify(result.token));
        alert(result.message)
        this.adminRouter.navigateByUrl('adminpage')
        
        localStorage.setItem('currentAdminname',JSON.stringify(result.currentAdminname));
       localStorage.setItem('currentAdminPwd',JSON.stringify(result.currentAdminPwd));
        
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
