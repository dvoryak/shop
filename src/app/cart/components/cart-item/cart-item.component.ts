import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../products/model/product.model';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()
  public product: Product;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onDelete(id: number): void {

  }

}
