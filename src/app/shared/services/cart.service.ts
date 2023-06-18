import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: IProduct[] = []; // Private array to store the cart items
  private cart$ = new BehaviorSubject<IProduct[]>(this.cart); // BehaviorSubject to emit cart changes to subscribers

  constructor() {}

  // Method to add a product to the cart
  addItemToCart(product: IProduct): void {
    const isProductAdded = this.cart.find((_) => {
      if (product.id === _.id) {
        return true;
      }
      return false;
    });

    if (!isProductAdded) {
      this.cart.push(product); // Add product to the cart array if it's not already added
      this.publishCart(); // Publish cart changes
    }
  }

  // Method to publish the cart changes and update subscribers
  publishCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart)); // Store the cart in local storage as a JSON string
    this.cart$.next(this.cart); // Emit the updated cart to subscribers
  }

  // Method to retrieve the cart as a BehaviorSubject for subscribers
  getCart(): BehaviorSubject<IProduct[]> {
    return this.cart$;
  }

  // Method to initialize the cart with provided data
  initCart(cart: IProduct[]): void {
    this.cart = cart; // Initialize the cart with the provided cart array
    this.cart$.next(this.cart); // Emit the initialized cart to subscribers
  }

  // Method to remove an item from the cart
  removeItem(id: number): void {
    this.cart = this.cart.filter((item) => {
      if (item.id !== id) {
        return true;
      }
      return false;
    });
    this.publishCart(); // Remove the item with the given id from the cart array and publish cart changes
  }

  // Method to increase the quantity of an item in the cart
  increaseQuantity(id: number): void {
    this.cart = this.cart.map((item) => {
      if (item.id === id) {
        item.selectedQuantity += 1; // Increase the selected quantity of the item with the given id
      }
      return item;
    });
    this.publishCart(); // Publish cart changes after increasing the quantity
  }

  // Method to decrease the quantity of an item in the cart
  decreaseQuantity(id: number): void {
    this.cart = this.cart.map((item) => {
      if (item.id === id) {
        item.selectedQuantity = item.selectedQuantity - 1 || 1; // Decrease the selected quantity of the item with the given id, ensuring it never goes below 1
      }
      return item;
    });
    this.publishCart(); // Publish cart changes after decreasing the quantity
  }

  // Method to clear the cart
  clearCart(): void {
    this.cart = []; // Clear the cart by assigning an empty array
    this.publishCart(); // Publish cart changes
  }
}
