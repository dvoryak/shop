import {Injectable} from '@angular/core';
import {Product} from '../model/product.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {log} from 'util';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private url = 'http://localhost:3000/products';

    constructor(private http: HttpClient) {
    }

    getProducts(): Promise<Product[]> {
        return this.http.get<Product[]>(this.url)
            .toPromise()
            .then(data => <Product[]>data);
    }

    addProduct(product: Product): Promise<any> {
        const url = this.url,
            body = JSON.stringify(product),
            options = {
                headers: new HttpHeaders({ 'Content-Type': 'application/json' })
            };

        return this.http
            .post(url, body, options)
            .toPromise();
    }

}
