import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allproducts:[],searchkey:string,propname:string): any[] {  //propname is the title 
    const result:any=[]
      //allprouducts is used bcs it containes neceessary componenets,mention the type
    if(!allproducts || searchkey=='' || propname==''){
return allproducts;
    }
    
    //searching
    //compariosn btween search key and all product
     allproducts.forEach((product:any)=>{  //product is the variable 
      if(product[propname].trim().toLowerCase().includes(searchkey.toLowerCase())){
        result.push(product)
      }
    })
    
      return result;
  }

}
