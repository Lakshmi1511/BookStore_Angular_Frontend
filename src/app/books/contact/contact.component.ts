import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { bookstoreService } from '../bookstore.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
