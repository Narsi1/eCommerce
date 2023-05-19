import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponentsModule } from './library/shared-components/shared-components.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './modules/product/product.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartModule } from './modules/cart/cart.module';
import { CheckoutModule } from './modules/checkout/checkout.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedComponentsModule,
    HttpClientModule,
    CartModule,
    ProductModule,
    NgbModule,
    CheckoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
