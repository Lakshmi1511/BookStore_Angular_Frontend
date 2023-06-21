import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class bookstoreService {
bookstorearray:any=[];
bookstorelist=new BehaviorSubject([])
  constructor() { }

  //add to bookstore
  addbookstore(product:any){
    this.bookstorearray.push(product);
    this.bookstorelist.next(this.bookstorearray)
    console.log(this.bookstorelist);
    let total=this.gettotal()
    console.log(total);
  
  }

  //total price
  gettotal(){
   var grandsum=0
   this.bookstorearray.map((item:any)=>{
    grandsum+=item.price   //grandsum=grandsum+item
   })
   return grandsum;
  }

  //remove item
  removebookstore(product:any){
this.bookstorearray.map((item:any,index:any)=>{
if(product.id==item.id){
  this.bookstorearray.splice(index,1)
}
})
this.bookstorelist.next(this.bookstorearray)  //remove and updation
  }


  //remove all itemms from bookstore when empty button is clicked
  removeall(){
    this.bookstorearray=[]
    this.bookstorelist.next(this.bookstorearray)
  }

  
}
