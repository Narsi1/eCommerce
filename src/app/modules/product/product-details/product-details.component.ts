import { getLocaleMonthNames } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct | undefined;
  quantity: number = 1;
  addedToCart= false;
  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe(params=> {
      productService.getProductById(params['id']).subscribe(product=> {
        this.product= product;
      })
      
    })
  }
  ngOnInit(): void {}
  addItemToCart(): void {
    if (this.product) {
      this.addedToCart = true;
      this.cartService.addItemToCart({
        ...this.product,
        selectedQuantity: 1
      });
    }
  }
 
}
