import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    date: Date = new Date();
    @ViewChild('title')
    appTitle: ElementRef;

    ngAfterViewInit(): void {
        (<HTMLInputElement> this.appTitle.nativeElement).outerText = 'Shop';
        console.log(this.appTitle);
    }


}
