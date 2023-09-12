import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
orderPlaced : boolean =false;
  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  placeOrder(){
    setTimeout(()=>{
      this.orderPlaced = true;
    },2000)

  }

  closePopupAndRedirect() {
    this.orderPlaced = false;
    this.router.navigate(['/moreproduct']); 
  }
}





