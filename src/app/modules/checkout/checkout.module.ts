import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeliveryAddressComponent } from './delivery-address/delivery-address.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';


@NgModule({
  declarations: [
    CheckoutComponent,
    DeliveryAddressComponent,
    OrderSummaryComponent,
    PaymentOptionsComponent,
    OrderPlacedComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CheckoutModule { }
