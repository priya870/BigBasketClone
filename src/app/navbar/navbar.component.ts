import { Component, OnInit } from '@angular/core';
import { GroceryservicesService } from '../service/groceryservices.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
public cartItems :number = 0
  constructor(private service : GroceryservicesService) { }

  ngOnInit(): void {
  }

  getCartItemCount():number{
    return this.service.cartItemList.length;

  }

}
