import { CartService } from './../cart.service';
import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  emsg:any
  wishlist:any

  constructor(private api:ApiService,private router:Router,private cart:CartService) { }
  ngOnInit(): void {
    this.api.getwishlist().subscribe(
      (data:any)=>{
        this.wishlist=data.products
        if(this.wishlist.length===0){
          this.emsg='Empty wishlist'
        }
      },                                  //wishlist is a new variable to add the product in cart
      (data:any)=>{
        this.emsg=data.error.message   //emsg is a new variable to display the error that the cart is empty
      }
    )
  }
//   deletewish(product:any){
//     this.api.deletefromwish(product.id).subscribe(
//       (result:any)=>{
//         alert(result.message)
//         this.router.navigateByUrl('wishlist')
//         this.wishlist=result.wishlist
//         if(this.wishlist.length==0){
//           this.emsg='Empty wishlist'
          
//         }
        
//       },
//       (result:any)=>{
// alert(result.error.message)
//       }

//     )
//   }

deletewish(product:any){
  this.api.deletefromwish(product.id).subscribe(
    (result:any)=>{
      alert(result.message)
      this.router.navigateByUrl('wishlist')
      this.wishlist=result.wishlist
     if(this.wishlist.length==0){
this.emsg='Empty wishlist'
     }
      // window.location.reload()
    },
    (result:any)=>{
      alert(result.error.message)
    }
  )
}

  addcarts(product:any){
    this.cart.addcart(product)
    this.deletewish(product)
  }

}


