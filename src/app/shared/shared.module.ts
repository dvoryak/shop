import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShColorDirective} from './directive/sh-color.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ShColorDirective],
    exports: [ShColorDirective]
})
export class SharedModule {
}
