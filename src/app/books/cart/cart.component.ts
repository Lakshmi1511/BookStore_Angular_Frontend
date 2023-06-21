import { Router } from '@angular/router';
import { bookstoreService } from './../bookstore.service';
import { Component, OnInit } from '@angular/core';
import { ParsedEventType } from '@angular/compiler';
import party from "party-js";

@Component({
  selector: 'app-bookstore',
  templateUrl: './bookstore.component.html',
  styleUrls: ['./bookstore.component.css']
})
export class bookstoreComponent implements OnInit {
bookstoreitems:any=[]
grand:any
updatedtotal:any
  constructor(private bookstore:bookstoreService,private router:Router) { }

  ngOnInit(): void {
this.bookstore.bookstorelist.subscribe(  //here bookstorelist is used bcz behaviour subject is in bookstorelist
  (data:any)=>{
    this.bookstoreitems=data
  }
)

this.grand=this.bookstore.gettotal()

  }
  removeitem(product:any){
         this.bookstore.removebookstore(product)
  }

  removeall(){
    this.bookstore.removeall()
  }

//   discount3per(source:any){
// let discount=(this.grand*3)/100
// this.updatedtotal=this.grand-discount
// party.confetti(source)
//   }

//   discount10per(){
//     let discount=(this.grand*10)/100
// this.updatedtotal=this.grand-discount

//   }
//   discount30per(){
//     let discount=(this.grand*30)/100
// this.updatedtotal=this.grand-discount

//   }
//   discount50per(){
//     let discount=(this.grand*50)/100
// this.updatedtotal=this.grand-discount

//   }

  proceed(){
    alert('Your order is successfully placed')
    this.router.navigateByUrl('/all-books')
    this.removeall()
  }




}
