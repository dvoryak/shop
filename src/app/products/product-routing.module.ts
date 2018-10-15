import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductComponent} from './product.component';

const routes: Routes = [
    {
        path: '',
        component: ProductComponent,
        children: [
            {
                path: '',
                children: [
                    {path: '', component: ProductListComponent},
                    {path: 'create', component: ProductFormComponent},
                    {path: 'view/:productId', component: ProductCardComponent, pathMatch: 'full'}
                ]
            }
        ]
    }
];

export const productComponents = [
    ProductComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductFormComponent
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule {
}
