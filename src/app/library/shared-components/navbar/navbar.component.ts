import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  // cartItems represents the number of items in the cart.
  cartItems: number = 0;

  constructor(
    private cartService: CartService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // Constructor for the NavbarComponent class.
    // Injects the CartService, Router, and ActivatedRoute dependencies.
  }

  ngOnInit(): void {
    // Lifecycle hook called when the component initializes.
    // Subscribes to the cartService's getCart() observable to get the cart data.
    // Updates the cartItems property with the length of the cart.
    this.cartService.getCart().subscribe((cart) => {
      this.cartItems = cart.length;
    });
  }

  /**
   * @description Navigates to the 'cart' route.
   */
  showCart(): void {
    this.router.navigate(['cart']);
  }

  /**
   * @description Navigates to the 'home' route.
   */
  goHome(): void {
    this.router.navigate(['home']);
  }
}
