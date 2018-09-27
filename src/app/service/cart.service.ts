import { Injectable } from '@angular/core';
import {Product} from '../shared/model/product.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {CartProduct} from '../shared/model/cart-product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: CartProduct[] = [];
  private subject: BehaviorSubject<CartProduct[]> = new BehaviorSubject<CartProduct[]>(this.products);

  constructor() { }

  findAll(): Observable<Product[]> {
    return this.subject.asObservable();
  }

  removeAll(): void {
    this.products = [];
    this.subject.next(this.products);
  }

  add(product: Product): void {
    const cartProduct = (<CartProduct> product);
    if (this.isProductExist(product.id)) {
        const existProduct = this.getProductById(product.id);
        existProduct.quantity = existProduct.quantity + 1;
    } else {
        cartProduct.quantity = 1;
        this.products.push(cartProduct);
    }
    this.subject.next(this.products);
  }

  private isProductExist(productId: number): boolean {
    return this.products
        .filter((product) => product.id === productId)
        .length > 0;
  }

  private getProductById(productId: number): CartProduct {
    return this.products
        .filter((product) => product.id === productId)[0];
  }
}
