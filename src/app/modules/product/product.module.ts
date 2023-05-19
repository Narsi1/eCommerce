import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductDetailsComponent,
    ProductCarouselComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
