import {Component, Input, OnInit} from '@angular/core';
import {CartProduct} from '../../models/cart-product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()
  public product: CartProduct;

  ngOnInit() {
  }

}
