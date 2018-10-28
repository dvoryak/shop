import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service';
import {CartProduct} from '../../models/cart-product.model';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit {

  products: CartProduct[];

  formGroup: FormGroup;

  constructor(cartService: CartService) {
    cartService.findAll().subscribe(data => this.products = data);
  }

  ngOnInit() {
  }

}
