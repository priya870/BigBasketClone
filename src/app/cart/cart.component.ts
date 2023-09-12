import { Component, OnInit } from '@angular/core';
import { GroceryservicesService } from '../service/groceryservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cartItems : any[] = []
  totalSum :number = 0;
  isCartEmpty: boolean = true;

  constructor(private services : GroceryservicesService , private router: Router) { }

  ngOnInit(): void {
    this.services.products().subscribe((results)=>{
      this.cartItems = results;
      this.calculateTotal();
      this.isCartEmpty = this.cartItems.length === 0;
    
    });
   
    
  }
  addToCart(productData:any){
    this.services.addtocartdata(productData)
    

  }
  addToCarts(productData:any){
    const cartItem = {...productData,quantity:1}
    this.addToCart(cartItem)

  }
  removeFromCart(productData:any){
    this.services.removefromcartdata(productData);
    console.log(productData)
    }
 

 

  calculateTotal(){
   this.totalSum = this.cartItems.reduce((total , item)=> total +(item.price * item.quantity),0)
    
  }

  deleteFromCart(index:number){
      this.cartItems.splice(index,1)
      this.calculateTotal()

        
  }

  goToCheckout() {
    this.router.navigate(['/checkout']); 
 
  }
}
