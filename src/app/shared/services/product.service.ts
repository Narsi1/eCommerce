import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct, IProductData } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  // Method to retrieve the list of products
  getProducts(): Observable<IProductData> {
    return this.http.get<IProductData>('https://dummyjson.com/products');
    // Send an HTTP GET request to the specified URL and return an observable of type IProductData
  }

  // Method to retrieve a specific product by its ID
  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`https://dummyjson.com/products/${id}`);
    // Send an HTTP GET request to the specified URL with the provided ID and return an observable of type IProduct
  }
}
