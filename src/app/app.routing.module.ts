import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactUsComponent} from './contact-us/components/contact-us/contact-us.component';
import {LoginComponent} from './layout/components/login/login.component';
import {PageNotFoundComponent} from './layout/components/page-not-found/page-not-found.component';
import {ProductListComponent} from './products/components/product-list/product-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    },
    {
        path: 'contact',
        component: ContactUsComponent,
        data: {title: 'Contact us'}
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        data: {title: 'Admin'}
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'products',
        loadChildren: './products/product.module#ProductModule',
        data: {title: 'Product list'}
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        data: {title: 'Page Not Found'}
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
