import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './products/components/product-list/product-list.component';
import {ContactUsComponent} from './contact-us/components/contact-us/contact-us.component';
import {LoginComponent} from './layout/components/login/login.component';

const routes: Routes = [
    {
        path: 'list',
        component: ProductListComponent,
        data: {title: 'Product list'}
    },
    {
        path: 'contact',
        component: ContactUsComponent,
        data: {title: 'Contact us'}
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        data: { title: 'Admin' }
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
