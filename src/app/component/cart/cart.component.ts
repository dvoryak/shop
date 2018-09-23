import { Component, OnInit } from '@angular/core';
import {CartService} from '../../service/cart.service';
import {Product} from '../../shared/model/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[];

  constructor(public cartService: CartService) {
    this.products = cartService.findAll();
  }

  ngOnInit() {
  }

}
