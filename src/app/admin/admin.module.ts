import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {OrdersComponent} from './orders/orders.component';
import {AdminRoutingModule} from './admin-routing.module';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [AdminComponent, OrdersComponent]
})
export class AdminModule {
}
