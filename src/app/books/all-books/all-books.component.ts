import { bookstoreService } from '../bookstore.service';
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
  bookstorecount:number=0
  // product:any
  constructor(private api:ApiService,private bookstore:bookstoreService) { }

  ngOnInit(): void {
    this.bookstore.bookstorelist.subscribe(
      (data:any)=>{   //data has content inside bookstorelist
        if(data){
          this.bookstorecount=data.length
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

addbookstore(product:any){
  this.bookstore.addbookstore(product)
}
}

