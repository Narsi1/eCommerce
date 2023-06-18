import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  // The product object that holds the details of the displayed product
  product: IProduct | undefined;

  // The quantity of the product to be added to the cart
  quantity: number = 1;

  // Flag indicating whether the product has been added to the cart
  addedToCart = false;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private toastService: ToastService
  ) {
    // Subscribe to the route params to retrieve the product ID from the URL
    this.activatedRoute.params.subscribe((params) => {
      // Use the ProductService to get the product details based on the ID
      this.productService.getProductById(params['id']).subscribe((product) => {
        this.product = product;
      });
    });
  }

  ngOnInit(): void {}

  /**
   * Adds the product to the cart
   */
  addItemToCart(): void {
    if (this.product) {
      this.addedToCart = true;
      // Add the product to the cart using the CartService
      this.cartService.addItemToCart({
        ...this.product,
        selectedQuantity: 1,
      });
      // Display a success toast message
      this.toastService.success('Item added to cart!!');
    }
  }
}
