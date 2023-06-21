import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.css']
})
export class DeletebookComponent implements OnInit {
  allproducts:any=[]; //all products array of details
  logoutStatus:boolean=false
  emsg:any
  delbook:any
  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.api.getPrducts().subscribe(
    (data:any)=>{
      this.allproducts=data.products
    }
  )
  }
  deletebook(product:any){
    this.api.deletefrombook(product.id).subscribe(
      (result:any)=>{
        alert(result.message)
        this.router.navigateByUrl('deletebook')
        this.delbook=result.delbook
       if(this.delbook.length==0){
  this.emsg='Book deleted'
       }
        // window.location.reload()
      },
      (result:any)=>{
        alert(result.error.message)
      }
    )
  }
  logout(){
    //remove all data stored  in local storage  for this perticular user
  localStorage.removeItem('currentAdminname')

  //update logout status as true
  this.logoutStatus=true
    
  //wait 2 sec to redrict
  setTimeout(()=>{
    //navigate to login
    this.router.navigateByUrl('login')
  },3000);
  }
}
