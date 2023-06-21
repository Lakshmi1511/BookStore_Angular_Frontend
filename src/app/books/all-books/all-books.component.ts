import { CartService } from '../cart.service';
import { ApiService } from '../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
  allproducts:any=[]; //all products array of details
  searchterm:string=''
  cartcount:number=0
  // product:any
  constructor(private api:ApiService,private cart:CartService) { }

  ngOnInit(): void {
    this.cart.cartlist.subscribe(
      (data:any)=>{   //data has content inside cartlist
        if(data){
          this.cartcount=data.length
        }
      }
    )
    this.api.getPrducts().subscribe(
      (data:any)=>{
        this.allproducts=data.products
      }
    )
   
    this.api.searchkey.subscribe(
      (data:any)=>{
        this.searchterm=data
      }
    )
  }
  search(event:any){
    let searchkey=event.target.value
    this.api.searchkey.next(searchkey) // method of behaviour subject
  }

  addtowishlist(product:any){
this.api.addtowishlist(product).subscribe(  //tp connect with the api
  (result:any)=>{
    alert(result.message) //addedd successfully
  },
  (result:any)=>{
    alert(result.error.message)   //error message
  }
)
}

addcart(product:any){
  this.cart.addcart(product)
}
}

