import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { CartService } from 'src/app/shared/services/cart.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  @Output() placeOrderClicked = new EventEmitter();
  cart: IProduct[] = [];
  orderTotal = 0;
  constructor(
    private cartService: CartService
  ) {
    this.cartService.getCart().subscribe(_ => {
      this.cart = _;
      console.log(this.cart);
      this.cart.forEach(product => {
        this.orderTotal = this.orderTotal + (product.price * product.selectedQuantity);
      })
    })
  }
  ngOnInit(): void {}

  placeOrder(): void {
    this.placeOrderClicked.emit();
  }

}
