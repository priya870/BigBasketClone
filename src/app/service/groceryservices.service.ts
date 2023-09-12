import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class GroceryservicesService {

  constructor(private _http:HttpClient) { }
  groceryUrl = "http://localhost:3000/grocery";
  public cartItemList :any = []
  public productList = new BehaviorSubject<any>([])

  bestSellers(){
    return this._http.get(this.groceryUrl)

  }

  // viewDetails
  getViewDetails(id:any){
    return this._http.get(`http://localhost:3000/grocery/${id}`)
    
  }

  // addtocartdata(data:any){
  //   this.cartItemList.push(data)
  //   this.productList.next(this.cartItemList)
  //   console.log(this.cartItemList);

  // }

  products(){
    return this.productList.asObservable()
  }



 

addtocartdata(item: any) {
const existingItem = this.cartItemList.find((i:any) => i.id === item.id);
  if (existingItem) {
    existingItem.quantity += 1;

  } else {

    this.cartItemList.push(item);
  }
  this.productList.next(this.cartItemList);
}

 

removefromcartdata(item: any) {
const index = this.cartItemList.findIndex((i:any) => i.id === item.id);
  if (index !== -1) {
    const cartItem = this.cartItemList[index];
    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;

    } else {

      this.cartItemList.splice(index, 1);

    }

  }

  this.productList.next(this.cartItemList);

}


}
