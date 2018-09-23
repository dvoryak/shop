import {Component, Input, OnInit} from '@angular/core';
import { Category } from '../../shared/category.enum';
import {Product} from '../../shared/model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  name = 'name';
  description = 'description';
  price = 800;
  category: Category = Category.COMPUTER;
  isAvailable = true;

  constructor() { }

  ngOnInit() {
  }

  onBuy(): void {
    console.log('Product was bought');
  }

  setActive(product: Product): void {
    console.log(product);
    this.name = product.name;
    this.description = product.description;
    this.category = product.category;
    this.isAvailable = product.isAvailable;
    this.price = product.price;
  }

}
