import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductModule} from './products/components/product.module';
import {CartModule} from './cart/components/cart.module';
import { ContactUsComponent } from './contact-us/components/contact-us/contact-us.component';
import {CoreModule} from './core/core.module';
import {ContactUsModule} from './contact-us/contact-us.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ProductModule,
        CartModule,
        ContactUsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
