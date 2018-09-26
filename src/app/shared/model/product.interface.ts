import {Category} from '../category.enum';

export interface ProductInterface {
    id: number;
    name: string;
    description: string;
    price: number;
    category: Category;
    img: string;
    isAvailable: boolean;
}
