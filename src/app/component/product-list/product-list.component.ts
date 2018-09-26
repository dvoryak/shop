import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../shared/model/product.model';
import {Category} from '../../shared/category.enum';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products: Product[];

    @Output()
    selectProduct: EventEmitter<Product> = new EventEmitter<Product>();

    constructor(private productService: ProductService) {
        productService.getProducts().subscribe((products) => this.products = products);
    }

    ngOnInit() {
    }

    onSelect(product: Product): void {
        console.log('Select and emit product');
        console.log(product);
        this.selectProduct.emit(product);
    }

    addProduct(product: Product): void {
       console.log(product);
       this.productService.addProduct(product);
    }
}
