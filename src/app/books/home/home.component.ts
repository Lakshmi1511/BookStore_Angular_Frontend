import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { bookstoreService } from '../bookstore.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bookstorecount:number=0

  constructor(private api:ApiService,private bookstore:bookstoreService) { }

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
