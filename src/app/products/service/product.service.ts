import { Injectable } from '@angular/core';
import {Product} from '../model/product.model';
import {Category} from '../../shared/category.enum';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] =  [
      new Product(1, 'IPhone7', 'Cool phone', 700, Category.MOBILE_PHONE, 'http://qps.ru/JrUca',
          true),
      new Product(2, 'IPhone6', 'Nice phone', 500, Category.MOBILE_PHONE, 'https://goo.gl/YWX5NG',
          false)
  ];

  private promise: Promise<Product[]> = Promise.resolve(this.products);

  constructor() {
  }
  getProducts(): Promise<Product[]> {
    return this.promise;
  }
  addProduct(product: Product): void {
      this.products.push(product);
  }
}
