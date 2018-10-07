import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShColorDirective} from './directive/sh-color.directive';
import {OrderByPipe} from './order-by.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ShColorDirective, OrderByPipe],
    exports: [ShColorDirective, OrderByPipe]
})
export class SharedModule {
}
