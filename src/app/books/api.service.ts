import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 searchkey = new BehaviorSubject('')  //behaviour subject : to share stream of data

  constructor(private http:HttpClient) { }
  register(uname:any,pwd:any,mobile:any,email:any){
    const body = {
      uname,
      pwd,
      mobile,
      email
    }
   //server register api-post
   return this.http.post('http://localhost:3000/register',body)
  }
  //login api - post
  loginApi(uname: any, pwd: any) {
    const body = {
      uname,
      pwd
    }
    return this.http.post('http://localhost:3000/login', body)
  }
    //admin register api call
    adminRegister(adminName:any,adminPswd:any,adminMobile:any,adminEmail:any,adminimage:any){
      const body={
        adminName,
        adminPswd,
        adminMobile,
        adminEmail,
        adminimage
      }
      //server adminRegister api call
      return this.http.post('http://localhost:3000/adminRegister',body)
    }
  //adminLogin api call
  adminLogin(adminName:any,adminPswd:any){
    const body ={
      adminName,
      adminPswd
    }
    //server adminLogin api call
    return this.http.post('http://localhost:3000/adminLogin',body)
  }
  //to get product
  getPrducts(){
    return this.http.get('http://localhost:3000/all-products')
  }
  // add to wishlist

  addtowishlist(product:any){
    const body={
      id:product.id,
      title:product.title,
      price:product.price,
      image:product.image,
      description:product.description

    }
    return this.http.post('http://localhost:3000/addtowishlist',body)

  }
  
  getwishlist(){
    return this.http.get('http://localhost:3000/getwishlist')

  }
  deletefromwish(id:any){
    return this.http.delete('http://localhost:3000/deletewish/'+id)

  }
  deletefrombook(id:any){
    return this.http.delete('http://localhost:3000/deletebook/'+id)

  }
    //addbook api call
    addBook(id:any,author:any,country:any,price:any,image:any,language:any,title:any,year:any){
      const body={
        id,
        author,
        country,
        price,
        image,
        language,
        title,
        year
      }
      //server addItem api call
      return this.http.post('http://localhost:3000/addBook',body)
    }
  
}
