import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.scss']
})
export class OrderPlacedComponent {
  orderTotal = 0;
  orderId = (Math.random() + 1).toString(36).substring(3).toUpperCase();
  constructor(
    private cartService: CartService, 
    private router: Router,
    private activeModal: NgbActiveModal
  ) {
    this.cartService.getCart().subscribe(_ => {
      _.forEach(product => {
        this.orderTotal = this.orderTotal + (product.price * product.selectedQuantity);
      })
    })
  }
  routeToHome(): void{
    this.router.navigate(['home']);
    this.activeModal.close();
    this.cartService.clearCart();
  }
}
