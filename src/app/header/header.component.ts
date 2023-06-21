import { bookstoreService } from './../books/bookstore.service';
import { ApiService } from './../books/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

bookstorecount:number=0

  constructor(private api: ApiService,private bookstore:bookstoreService) { }

  ngOnInit(): void {
    this.bookstore.bookstorelist.subscribe(
      (data:any)=>{   //data has content inside bookstorelist
        if(data){
          this.bookstorecount=data.length
        }
      }
    )
  }

  search(event:any){
    let searchkey=event.target.value
    this.api.searchkey.next(searchkey) // method of behaviour subject
  }

}
