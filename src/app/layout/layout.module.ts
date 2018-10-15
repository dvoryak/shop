import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {LogoutComponent} from './components/logout/logout.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [LoginComponent, LogoutComponent],
    exports: [LogoutComponent]
})
export class LayoutModule {
}
