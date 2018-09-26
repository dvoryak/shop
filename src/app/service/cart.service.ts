import { Injectable } from '@angular/core';
import {Product} from '../shared/model/product.model';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [];
  private subject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(this.products);

  constructor() { }

  findAll(): Observable<Product[]> {
    return this.subject.asObservable();
  }

  removeAll(): void {
    this.products = [];
    this.subject.next(this.products);
  }

  add(product: Product): void {
    this.products.push(product);
    this.subject.next(this.products);
  }
}
