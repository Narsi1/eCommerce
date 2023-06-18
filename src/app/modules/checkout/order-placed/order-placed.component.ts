import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.scss'],
})
export class OrderPlacedComponent {
  // Represents the total amount of the order
  orderTotal = 0;

  // Represents the randomly generated order ID
  orderId = (Math.random() + 1).toString(36).substring(3).toUpperCase();

  constructor(
    private cartService: CartService,
    private router: Router,
    private activeModal: NgbActiveModal
  ) {
    // Constructor for the OrderPlacedComponent class.
    // Injects the CartService, Router, and NgbActiveModal dependencies.
    // Calculates the order total based on the items in the cart.
    this.cartService.getCart().subscribe((_) => {
      _.forEach((product) => {
        this.orderTotal =
          this.orderTotal + product.price * product.selectedQuantity;
      });
    });
  }

  /**
   * @description Routes to the home page, closes the active modal, and clears the cart.
   */
  routeToHome(): void {
    this.router.navigate(['home']);
    this.activeModal.close();
    this.cartService.clearCart();
  }
}
