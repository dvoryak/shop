import { Injectable } from '@angular/core';
import {Product} from '../shared/model/product.model';
import {Category} from '../shared/category.enum';
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

  private subject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(this.products);

  constructor() {
  }
  getProducts(): Observable<Product[]> {
    return this.subject.asObservable();
  }
  addProduct(product: Product): void {
      this.products.push(product);
      this.subject.next(this.products);
  }
}
