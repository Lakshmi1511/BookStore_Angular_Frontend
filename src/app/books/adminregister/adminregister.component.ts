import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {

  adminRegisterForm = this.fb.group({
    adminName:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    adminPswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
    adminMobile:['',[Validators.required,Validators.pattern(/^\d{10}$/)]],
    adminEmail:['',[Validators.required,Validators.email]],
    adminimage:['',[Validators.required]]
  })
  constructor(private fb:FormBuilder,private api:ApiService,private adminrouter:Router) { }

  ngOnInit(): void {
  }
  adminRegister(){
    let adminName=this.adminRegisterForm.value.adminName
    let adminPswd = this.adminRegisterForm.value.adminPswd
    let adminMobile = this.adminRegisterForm.value.adminMobile
    let adminEmail = this.adminRegisterForm.value.adminEmail
    let adminimage = this.adminRegisterForm.value.adminimage

    if(this.adminRegisterForm.valid){   
      this.api.adminRegister(adminName,adminPswd,adminMobile,adminEmail,adminimage)
      .subscribe((result:any)=>{
     alert(result.message);
    //redirect to adminlogin page
      this.adminrouter.navigateByUrl('adminlogin')
      
      },
    //400 response
    (result:any)=>{
      alert(result.error.message)
      this.adminRegisterForm.reset()
    }
       )
    
      }
      else{
        alert('invalid')
      }
     }

}
