import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  cart: IProduct[] = [];
  orderTotal = 0;
  constructor(
    private cartService: CartService
  ) {
    this.cartService.getCart().subscribe(_ => {
      this.cart = _;
      console.log(this.cart);
      
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
