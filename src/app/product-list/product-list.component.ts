import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';
import {Product} from '../shared/model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private productService: ProductService;
  products: Product[];

  constructor(productService: ProductService) {
    this.productService = productService;
    this.products = productService.getProducts();
  }

  ngOnInit() {
  }

}
