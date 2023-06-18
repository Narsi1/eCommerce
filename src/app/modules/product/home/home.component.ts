import { Component } from '@angular/core';
import {
  IProduct,
  IProductData,
} from 'src/app/shared/interfaces/product.interface';
import { ProductService } from 'src/app/shared/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // Property to hold the fetched product data
  productData: IProductData | undefined;

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // Fetch the product data from the ProductService
    this.productService.getProducts().subscribe((data) => {
      this.productData = data;
    });
  }

  // Method to navigate to the product details page for the selected product
  showProductDetails(product: IProduct): void {
    this.router.navigate([`./${product.id}`], {
      relativeTo: this.activatedRoute,
    });
  }
}
