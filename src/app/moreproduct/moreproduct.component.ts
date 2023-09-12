import { Component, OnInit } from '@angular/core';
import { GroceryservicesService } from '../service/groceryservices.service';
// import{ActivatedRoute} from "@angular/router"


@Component({
  selector: 'app-moreproduct',
  templateUrl: './moreproduct.component.html',
  styleUrls: ['./moreproduct.component.css']
})
export class MoreproductComponent implements OnInit {
  bestSellerDisplay:any = []
  productData:any;

  constructor(private service:GroceryservicesService) { }

  ngOnInit(): void {
    
    this.service.bestSellers().subscribe((result:any)=>{
      console.log(result);
      this.bestSellerDisplay = result
    })
  }

}