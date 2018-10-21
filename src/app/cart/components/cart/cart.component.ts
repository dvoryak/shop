import {Component, DoCheck, IterableDiffers, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {Product} from '../../../products/model/product.model';
import {CartProduct} from '../../models/cart-product.model';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, DoCheck {
    products: CartProduct[];
    totalAmount: number;
    totalCount: number;

    constructor(private cartService: CartService, private differs: IterableDiffers) {
        cartService.findAll().subscribe((products) => this.products = products);
    }

    ngOnInit() {
    }

    removeAll(): void {
        this.cartService.removeAll();
    }

    removeById(id: number): void {
        this.cartService.removeOneProduct(id);
    }

    ngDoCheck(): void {
        const changes = this.differs.find(this.products);

        if (changes) {
            this.totalAmount = this.cartService.getTotalAmount();
            this.totalCount = this.cartService.getTotalCount();
        }
    }

}
