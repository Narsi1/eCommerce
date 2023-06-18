import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path: 'home', // Path for the home page
    component: HomeComponent, // Component to be displayed for the home page
  },
  {
    path: 'home/:id', // Path for the product details page with a dynamic parameter 'id'
    component: ProductDetailsComponent, // Component to be displayed for the product details page
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
