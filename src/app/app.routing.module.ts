import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './products/components/product-list/product-list.component';
import {ContactUsComponent} from './contact-us/components/contact-us/contact-us.component';
import {AuthGuard} from './core/guards/auth.guard';

const routes: Routes = [
    {
        path: 'list',
        component: ProductListComponent,
        data: {title: 'Product list'}
    },
    {
        path: 'contact',
        canActivate: [AuthGuard],
        component: ContactUsComponent,
        data: {title: 'Contact us'}
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        data: { title: 'Admin' }
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
