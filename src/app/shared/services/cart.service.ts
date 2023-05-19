import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: IProduct[] = [];
  private cart$ = new BehaviorSubject<IProduct[]>(this.cart);
  constructor() {}
  addItemToCart(product: IProduct): void {
    const isProductAdded = this.cart.find((_) => {
      if (product.id === _.id) {
        return true;
      }
      return false;
    });
    if (!isProductAdded) {
      this.cart.push(product);
      this.publishCart();
    }
  }

  publishCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.cart$.next(this.cart);
  }
  getCart(): BehaviorSubject<IProduct[]> {
    return this.cart$;
  }

  initCart(cart: IProduct[]): void {
    this.cart = cart;
    this.cart$.next(this.cart);
  }

  removeItem(id: number): void {
    this.cart = this.cart.filter((item) => {
      if (item.id !== id) {
        return true;
      }
      return false;
    });
    this.publishCart();
  }
  increaseQuantity(id: number): void {
    this.cart = this.cart.map((item) => {
      if (item.id === id) {
        item.selectedQuantity += 1;
      }
      return item;
    });
    this.publishCart();
  }

  decreaseQuantity(id: number): void {
    this.cart = this.cart.map((item) => {
      if (item.id === id) {
        item.selectedQuantity = item.selectedQuantity - 1 || 1
      }
      return item;
    });
    this.publishCart();
  }
}
