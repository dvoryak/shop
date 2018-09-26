import {Category} from '../category.enum';

export interface ProductInterface {
    name: string;
    description: string;
    price: number;
    category: Category;
    isAvailable: boolean;
}
