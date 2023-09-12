import { Injectable } from '@angular/core';
import{BehaviorSubject} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class CartQunatityService {

  constructor() { }
  private cartQunatitySubject = new BehaviorSubject<number>(0);
  cartQuantity$ = this.cartQunatitySubject.asObservable();

  updateCartQunatity(quantity:number){
    this.cartQunatitySubject.next(quantity)
  }
}
