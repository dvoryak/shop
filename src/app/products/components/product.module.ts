import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductComponent} from './product/product.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [ProductListComponent, ProductComponent],
    exports: [ProductListComponent, ProductComponent]
})
export class ProductModule {
}
