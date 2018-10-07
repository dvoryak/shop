import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product.model';
import {Category} from '../../../shared/category.enum';
import {CartService} from '../../../cart/services/cart.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    title: 'Products';
    products: Promise<Product[]>;
    cartProducts: Product[];

    @Output()
    selectProduct: EventEmitter<Product> = new EventEmitter<Product>();

    constructor(public productService: ProductService,
                private cartService: CartService) {
        cartService.findAll().subscribe((products) => this.cartProducts = products);
    }

    ngOnInit() {
    }

    onSelect(product: Product): void {
        console.log('Select and emit products');
        this.selectProduct.emit(product);
    }

    addProduct(product: Product): void {
       this.productService.addProduct(product);
    }

    onBuy(product: Product): void {
        this.cartService.add(new Product(product.id, product.name, product.description, product.price, product.category,
            product.img, product.isAvailable));
        console.log('Product was bought');
    }
}
