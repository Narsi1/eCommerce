import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  IProduct,
  IProductData,
} from 'src/app/shared/interfaces/product.interface';
import { ProductService } from 'src/app/shared/services/product.service';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  productData: IProductData | undefined;
  constructor(
    private productService: ProductService,
    private modalService: NgbModal,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    productService.getProducts().subscribe((data) => {
      this.productData = data;
    });
  }
  showProductDetails(product: IProduct): void {
    this.router.navigate([`./${product.id}`], {relativeTo: this.activatedRoute})
  }
}
