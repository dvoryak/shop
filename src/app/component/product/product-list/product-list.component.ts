import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductService} from '../../../service/product.service';
import {Product} from '../../../shared/model/product.model';
import {Category} from '../../../shared/category.enum';
import {CartService} from '../../../service/cart.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products: Product[];
    cartProducts: Product[];

    @Output()
    selectProduct: EventEmitter<Product> = new EventEmitter<Product>();

    constructor(private productService: ProductService,
                private cartService: CartService) {
        productService.getProducts().subscribe((products) => this.products = products);
        cartService.findAll().subscribe((products) => this.cartProducts = products);
    }

    ngOnInit() {
    }

    onSelect(product: Product): void {
        console.log('Select and emit product');
        this.selectProduct.emit(product);
    }

    addProduct(product: Product): void {
       this.productService.addProduct(product);
    }

    onBuy(product: Product): void {
        this.cartService.add(new Product(this.products.length + 1, product.name, product.description, product.price, product.category,
            product.img, product.isAvailable));
        console.log('Product was bought');
    }
}
