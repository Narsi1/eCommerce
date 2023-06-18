import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: 'cart', // URL path for the cart component
    component: CartComponent, // Component to be displayed when the path is accessed
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Importing the configured routes
  exports: [RouterModule], // Exporting the RouterModule for use in other modules
})
export class CartRoutingModule {}
