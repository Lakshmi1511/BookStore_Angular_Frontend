import { Router } from '@angular/router';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { ParsedEventType } from '@angular/compiler';
import party from "party-js";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cartitems:any=[]
grand:any
updatedtotal:any
  constructor(private cart:CartService,private router:Router) { }

  ngOnInit(): void {
this.cart.cartlist.subscribe(  //here cartlist is used bcz behaviour subject is in cartlist
  (data:any)=>{
    this.cartitems=data
  }
)

this.grand=this.cart.gettotal()

  }
  removeitem(product:any){
         this.cart.removecart(product)
  }

  removeall(){
    this.cart.removeall()
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
