import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {AuthGuard} from '../core/guards/auth.guard';
import {OrdersComponent} from './orders/orders.component';


const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                canActivate: [AuthGuard],
                children: [
                    { path: 'orders', component: OrdersComponent },
                ]
            }
        ]
    }
];

export const adminRouterComponents = [
    AdminComponent,
    OrdersComponent
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {

}
