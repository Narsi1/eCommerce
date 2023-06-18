import { Component, OnInit } from '@angular/core';
import { CartService } from './shared/services/cart.service';
import { ToastService } from './shared/services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private cartService: CartService,
    public toastService: ToastService
  ) {}

  /**
   * Initializes the component.
   * Retrieves the cart from local storage and initializes the cart service with the cart data.
   */
  ngOnInit(): void {
    // Retrieve the cart data from local storage
    const cart = localStorage.getItem('cart');
    if (cart) {
      // Initialize the cart service with the cart data
      this.cartService.initCart(JSON.parse(cart));
    }
  }

  // The title of the application
  title = 'eCommerce';
}
