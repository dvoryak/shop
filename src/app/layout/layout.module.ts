import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {LogoutComponent} from './components/logout/logout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [LoginComponent, LogoutComponent, PageNotFoundComponent],
    exports: [LogoutComponent]
})
export class LayoutModule {
}
