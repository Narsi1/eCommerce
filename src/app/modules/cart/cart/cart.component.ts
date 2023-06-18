import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  // cart represents the array of products in the cart.
  cart: IProduct[] = [];

  // cartTotal represents the total price of the cart.
  cartTotal = 0;

  constructor(private cartService: CartService, private router: Router) {
    // Constructor for the CartComponent class.
    // Injects the CartService and Router dependencies.

    // Subscribes to the cartService's getCart() observable to get the cart data.
    // Updates the cart and cartTotal properties.
    this.cartService.getCart().subscribe((cartdata) => {
      this.cartTotal = 0;
      this.cart = cartdata;

      // Calculate the total price of the cart by iterating over each product.
      this.cart.forEach((product) => {
        this.cartTotal =
          this.cartTotal + product.price * product.selectedQuantity;
      });
    });
  }

  ngOnInit(): void {
    // Lifecycle hook called when the component initializes.
  }

  /**
   * @description Removes a product from the cart.
   * @param id The ID of the product to remove.
   */
  removeItem(id: number): void {
    this.cartService.removeItem(id);
  }

  /**
   * @description Increases the quantity of a product in the cart.
   * @param id The ID of the product whose quantity to increase.
   */
  increaseQuantity(id: number): void {
    this.cartService.increaseQuantity(id);
  }

  /**
   * @description Decreases the quantity of a product in the cart.
   * @param id The ID of the product whose quantity to decrease.
   */
  decreaseQuantity(id: number): void {
    this.cartService.decreaseQuantity(id);
  }

  /**
   * @description Navigates to the 'checkout' route.
   */
  proceedToCheckout(): void {
    this.router.navigate(['checkout']);
  }

  /**
   * @description Navigates to the 'home' route.
   */
  goToHome(): void {
    this.router.navigate(['home']);
  }
}
