import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './cart/cart.component';
import {CartItemComponent} from './cart-item/cart-item.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {ProcessOrderComponent} from './process-order/process-order.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        ReactiveFormsModule
    ],
    declarations: [CartComponent, CartItemComponent, ProcessOrderComponent],
    exports: [CartComponent]
})
export class CartModule {
}
