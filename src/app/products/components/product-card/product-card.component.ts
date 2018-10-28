import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
    id: number;
    product: Product;

    constructor(public productService: ProductService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.id = parseInt(params.get('productId'), 10);


            this.productService.getProducts()
                .then(products => products.filter(product => {
                    if (product.id === this.id) {
                        this.product = product;
                    }
                }));
        });
    }

    onClose() {

    }
}
