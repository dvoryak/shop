import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../shared/model/product.model';
import {CartService} from '../../../service/cart.service';

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
