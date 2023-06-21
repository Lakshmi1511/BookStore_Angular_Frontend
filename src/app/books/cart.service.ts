import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cartarray:any=[];
cartlist=new BehaviorSubject([])
  constructor() { }

  //add to cart
  addcart(product:any){
    this.cartarray.push(product);
    this.cartlist.next(this.cartarray)
    console.log(this.cartlist);
    let total=this.gettotal()
    console.log(total);
  
  }

  //total price
  gettotal(){
   var grandsum=0
   this.cartarray.map((item:any)=>{
    grandsum+=item.price   //grandsum=grandsum+item
   })
   return grandsum;
  }

  //remove item
  removecart(product:any){
this.cartarray.map((item:any,index:any)=>{
if(product.id==item.id){
  this.cartarray.splice(index,1)
}
})
this.cartlist.next(this.cartarray)  //remove and updation
  }


  //remove all itemms from cart when empty button is clicked
  removeall(){
    this.cartarray=[]
    this.cartlist.next(this.cartarray)
  }

  
}
