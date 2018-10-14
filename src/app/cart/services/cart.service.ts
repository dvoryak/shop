import {Injectable} from '@angular/core';
import {Product} from '../../products/model/product.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {CartProduct} from '../models/cart-product.model';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    products: CartProduct[] = [];
    private subject: BehaviorSubject<CartProduct[]> = new BehaviorSubject<CartProduct[]>(this.products);

    constructor() {
    }

    findAll(): Observable<CartProduct[]> {
        return this.subject.asObservable();
    }

    removeAll(): void {
        this.products = [];
        this.subject.next(this.products);
    }

    add(product: Product): void {
        const cartProduct = (<CartProduct> product);
        if (this.isProductExist(product.id)) {
            const existProduct = this.getProductById(product.id);
            existProduct.quantity = existProduct.quantity + 1;
        } else {
            cartProduct.quantity = 1;
            this.products.push(cartProduct);
        }
        this.subject.next(this.products);
    }

    getTotalAmount(): number {
        return this.products
            .map((product) => product.price * product.quantity)
            .reduce((a, b) => a + b, 0);
    }

    getTotalCount(): number {
        return this.products.length;
    }

    addWithCount(product: Product, count: number): void {
        for (let i = 0; i < 2; i++) {
            this.add(product);
        }
    }

    removeProduct(id: number): void {
        const index = this.products.findIndex(product => product.id === id);

        this.products.splice(index, 1);
    }

    removeOneProduct(id: number): void {
        const index = this.products.findIndex(product => product.id === id);
        const cartProduct = this.products[index];

        if (cartProduct.quantity === 1) {
            this.removeProduct(id);
            return;
        }

        cartProduct.quantity = cartProduct.quantity - 1;

    }


    private isProductExist(productId: number): boolean {
        return this.products
            .filter((product) => product.id === productId)
            .length > 0;
    }

    private getProductById(productId: number): CartProduct {
        return this.products
            .filter((product) => product.id === productId)[0];
    }
}
