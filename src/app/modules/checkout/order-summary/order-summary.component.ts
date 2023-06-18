import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent implements OnInit {
  @Output() placeOrderClicked = new EventEmitter();

  // Represents the items in the cart
  cart: IProduct[] = [];

  // Represents the total amount of the order
  orderTotal = 0;

  constructor(private cartService: CartService) {
    // Constructor for the OrderSummaryComponent class.
    // Injects the CartService dependency.
    // Subscribes to changes in the cart and calculates the order total.
    this.cartService.getCart().subscribe((_) => {
      this.cart = _;
      this.cart.forEach((product) => {
        this.orderTotal =
          this.orderTotal + product.price * product.selectedQuantity;
      });
    });
  }

  ngOnInit(): void {
    // Lifecycle hook called when the component initializes.
  }

  /**
   * @description Emits an event when the "Place Order" button is clicked.
   */
  placeOrder(): void {
    this.placeOrderClicked.emit();
  }
}
