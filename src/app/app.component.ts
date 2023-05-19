import { Component, OnInit } from '@angular/core';
import { CartService } from './shared/services/cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
constructor(private cartService: CartService){

}
  ngOnInit(): void {
    const cart = localStorage.getItem('cart')
    if(cart) {
    
     this.cartService.initCart(JSON.parse(cart));
    }
  }
  title = 'eCommerce';
  
}

