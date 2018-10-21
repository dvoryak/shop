import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {productComponents, ProductRoutingModule} from './product-routing.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ProductRoutingModule
    ],
    declarations: [productComponents],
    exports: [productComponents]
})
export class ProductModule {
}
