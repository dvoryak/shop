import { Injectable } from '@angular/core';
import {Product} from '../shared/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[];

  constructor() { }

  findAll(): Product[] {
    return this.products;
  }

  add(product: Product): void {
    this.products.push(product);
  }
}
