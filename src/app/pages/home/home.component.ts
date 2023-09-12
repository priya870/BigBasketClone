import { Component, OnInit } from '@angular/core';
import { GroceryservicesService } from 'src/app/service/groceryservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _services:GroceryservicesService) { }
bestSellerDisplay :any = [];
  ngOnInit(): void {
    this._services.bestSellers().subscribe((result:any)=>{
      console.log(result);
      this.bestSellerDisplay = result
    })
  }

}
