import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoreproductComponent } from './moreproduct/moreproduct.component';
import { CartComponent } from './cart/cart.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path :"",
    component:HomeComponent
  },
  {
    path: "moreproduct",
    component:MoreproductComponent
  },

  {
    path:"cart",
    component:CartComponent
  },

  {path:"view/:id",
  component:ViewdetailsComponent
},

{
  path:"checkout",
  component:CheckoutComponent
},

{
  path:"login",
  component:LoginComponent
},

{
  path:"signup",
  component:SignupComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
