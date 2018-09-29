import {Product} from '../../products/model/product.model';
import {Category} from '../../shared/category.enum';

export class CartProduct extends Product {
    constructor(id: number,
                name: string,
                description: string,
                price: number,
                category: Category,
                img: string,
                isAvailable: boolean,
                public quantity: number) {
        super(id, name, description, price, category, img, isAvailable);
        this.quantity = quantity;
    }
}