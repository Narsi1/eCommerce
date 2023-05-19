import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct, IProductData } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getProducts(): Observable<IProductData> {
    return this.http.get<
    IProductData>("https://dummyjson.com/products")
  }
  getProductById(id: number): Observable<IProduct> {
    return this.http.get<
    IProduct>(`https://dummyjson.com/products/${id}`)
  }
}
