import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {
    path: 'checkout', // URL path for the checkout route
    component: CheckoutComponent, // Component to be rendered for the checkout route
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Register the defined routes for the Checkout module
  exports: [RouterModule], // Export the configured router module for use in other modules
})
export class CheckoutRoutingModule {}
