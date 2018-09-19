import { Injectable } from '@angular/core';
import {Product} from '../shared/model/product.model';
import {Category} from '../shared/category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] =  [
      new Product('IPhone7', 'Cool phone', 700, Category.MOBILE_PHONE, true),
      new Product('IPhone6', 'Nice phone', 500, Category.MOBILE_PHONE, false)
  ];

  constructor() {
  }
  getProducts(): Product[] {
    return this.products;
  }
}
