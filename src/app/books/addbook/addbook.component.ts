import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  addItemStatus :boolean = false
  logoutStatus:boolean=false

addbookForm=this.fb.group({
  id:['',[Validators.required,Validators.pattern('[0-9]*')]],
  author:['',[Validators.required]],
  country:['',[Validators.required]],
  price:['',[Validators.required,Validators.pattern('[0-9]*')]],
  image:['',[Validators.required]],
  language:['',[Validators.required]],
  title:['',[Validators.required]],
  year:['',[Validators.required,Validators.pattern('[0-9]*')]]

})
constructor(private fb:FormBuilder,private api:ApiService,private addBookRouter:Router){}

  ngOnInit(): void {
  }
  addBook(){
 
    let id = this.addbookForm.value.id
    let author = this.addbookForm.value.author
    let country=this.addbookForm.value.country
    let price=this.addbookForm.value.price
    let image = this.addbookForm.value.image
    let language = this.addbookForm.value.language
    let title = this.addbookForm.value.title
    let year = this.addbookForm.value.year
    
    if(this.addbookForm.valid){
    //call addItem of apiService
    this.api.addBook(id,author,country,price,image,language,title,year)
    //200 response
    .subscribe((result:any)=>{
      alert(result.message);
      //redirect to all-tems page
      this.addItemStatus = true
      setTimeout(()=>{
        this.addBookRouter.navigateByUrl('/all-books')
      },5000);
      
    
    },
    //400 response
    (result:any)=>{
      alert(result.error.message)
      //reset the value of input field
      this.addbookForm.reset()
    }
    )
    }
    else{
      alert('invalid Form')
    }
    
  }
  logout(){
    //remove all data stored  in local storage  for this perticular user
  localStorage.removeItem('currentAdminname')

  //update logout status as true
  this.logoutStatus=true
    
  //wait 2 sec to redrict
  setTimeout(()=>{
    //navigate to login
    this.addBookRouter.navigateByUrl('login')
  },3000);
  }

}
