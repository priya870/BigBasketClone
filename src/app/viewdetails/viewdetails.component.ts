import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroceryservicesService } from '../service/groceryservices.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit {

  constructor(private router:ActivatedRoute , private service:GroceryservicesService) { }
  public item:any; 
  productData:any
  quantity:any
  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get("id");
    console.log(getParamId);
    getParamId && this.service.getViewDetails(getParamId).subscribe((res)=>{
      this.productData = res;
      console.log(res)

    })
  
  }

  addToCart(productData:any){
    this.service.addtocartdata(productData)
    

  }

  addToCarts(productData:any){
    const cartItem = {...productData,quantity:1}
    this.addToCart(cartItem)
    console.log(cartItem)
    

  }

 
removeFromCart(productData:any){
this.service.removefromcartdata(productData);
console.log(productData)
}
}
