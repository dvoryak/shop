import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductModule} from './products/components/product.module';
import {CartModule} from './cart/components/cart.module';
import { ContactUsComponent } from './contact-us/components/contact-us/contact-us.component';

@NgModule({
    declarations: [
        AppComponent,
        ContactUsComponent
    ],
    imports: [
        BrowserModule,
        ProductModule,
        CartModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
