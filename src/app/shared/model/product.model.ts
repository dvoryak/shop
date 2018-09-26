import {ProductInterface} from './product.interface';
import {Category} from '../category.enum';

export class Product implements ProductInterface {
    constructor(public id: number,
                public name: string,
                public description: string,
                public price: number,
                public category: Category,
                public img: string,
                public isAvailable: boolean) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.img = img;
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
