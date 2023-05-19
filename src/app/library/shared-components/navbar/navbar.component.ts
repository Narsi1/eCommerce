import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  cartItems: number = 0;
  constructor(
    private cartService: CartService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart) => {
      this.cartItems = cart.length;
    });
  }
  showCart(): void {
    this.router.navigate(['cart'])
  }
  goHome(): void {
    this.router.navigate(['home'])
  }
}
