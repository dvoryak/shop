import { Injectable } from '@angular/core';
import {Product} from '../shared/model/product.model';
import {Category} from '../shared/category.enum';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] =  [
      new Product('IPhone7', 'Cool phone', 700, Category.MOBILE_PHONE, true),
      new Product('IPhone6', 'Nice phone', 500, Category.MOBILE_PHONE, false)
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
