import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product.model';
import {ProductService} from '../../service/product.service';

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

    constructor(private productService: ProductService) {
    }

    ngOnInit() {
    }

    onAddProduct(product: Product): void {
        this.productService.addProduct(product);
    }

}
