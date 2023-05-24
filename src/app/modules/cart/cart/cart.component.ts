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
  cart: IProduct[] = [];
  cartTotal = 0;
  constructor(private cartService: CartService, private router: Router) {
    this.cartService.getCart().subscribe((cartdata) => {
      this.cartTotal = 0;
      this.cart = cartdata;
      this.cart.forEach((product) => {
        this.cartTotal =
          this.cartTotal + product.price * product.selectedQuantity;
      });
      console.log(this.cart);
    });
  }
  ngOnInit(): void {}
  removeItem(id: number): void {
    this.cartService.removeItem(id);
  }

  increaseQuantity(id: number): void {
    this.cartService.increaseQuantity(id);
  }
  decreaseQuantity(id: number): void {
    this.cartService.decreaseQuantity(id);
  }

  proceedToCheckout(): void {
    this.router.navigate(['checkout']);
  }

  goToHome(): void {
    this.router.navigate(['home']);
  }
}
