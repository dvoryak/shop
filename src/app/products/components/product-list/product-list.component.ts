import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product.model';
import {CartService} from '../../../cart/services/cart.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../core/services/auth.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products: Product[];
    cartProducts: Product[];


    constructor(public productService: ProductService,
                private cartService: CartService,
                private router: Router,
                public auth: AuthService) {
        cartService.findAll().subscribe((products) => this.cartProducts = products);
        productService.getProducts().then(data => this.products = data);
    }

    ngOnInit() {
    }

    onSelect(product: Product): void {
        console.log('Select and emit products');
        this.router.navigate(['products/view', product.id]);
    }

    onBuy(product: Product): void {
        this.cartService.add(new Product(product.id, product.name, product.description, product.price, product.category,
            product.img, product.isAvailable));
        console.log('Product was bought');
    }
}
