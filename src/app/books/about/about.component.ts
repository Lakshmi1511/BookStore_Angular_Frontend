import { Component, OnInit } from '@angular/core';
import { bookstoreService } from '../bookstore.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
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
