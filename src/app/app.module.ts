import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import {HttpClientModule} from "@angular/common/http"
import {GroceryservicesService} from './service/groceryservices.service';
import { MoreproductComponent } from './moreproduct/moreproduct.component';
import { CartComponent } from './cart/cart.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';
import { CheckoutComponent } from './checkout/checkout.component'
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MinifooterComponent } from './minifooter/minifooter.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MoreproductComponent,
    CartComponent,
    ViewdetailsComponent,
    CheckoutComponent,
    LoginComponent,
    SignupComponent,
    MinifooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [GroceryservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
