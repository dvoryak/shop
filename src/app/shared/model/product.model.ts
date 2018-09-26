import {ProductInterface} from './product.interface';
import {Category} from '../category.enum';

export class Product implements ProductInterface {
    constructor(public name: string,
                public description: string,
                public price: number,
                public category: Category,
                public isAvailable: boolean) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.isAvailable = isAvailable;
    }
    getDescription(): string {
        return  this.name + ' ' +
                this.description + ' ' +
                this.price + ' ' +
                Category[this.category] + ' ' +
                (this.isAvailable ? 'available' : 'not available');
    }
}
