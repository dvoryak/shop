import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductModule} from './products/product.module';
import {CartModule} from './cart/components/cart.module';
import { ContactUsComponent } from './contact-us/components/contact-us/contact-us.component';
import {CoreModule} from './core/core.module';
import {ContactUsModule} from './contact-us/contact-us.module';
import {AppRoutingModule} from './app.routing.module';
import {AdminModule} from './admin/admin.module';
import {Router} from '@angular/router';
import {LayoutModule} from './layout/layout.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CartModule,
        ContactUsModule,
        LayoutModule,

        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
