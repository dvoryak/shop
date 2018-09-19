import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/category.enum';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvalaible: boolean;

  constructor() { }

  ngOnInit() {
  }

  onBuy(): void {
    console.log('Product was bought');
  }

}
