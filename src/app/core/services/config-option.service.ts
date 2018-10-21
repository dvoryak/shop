import {Injectable} from '@angular/core';
import {CoreModule} from '../core.module';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {delay} from 'rxjs/internal/operators';

@Injectable({
    providedIn: CoreModule
})
export class ConfigOptionService {


    constructor(private http: HttpClient) {
    }

    public getObject(): any {
        if (localStorage.length === 0) {
            this.loadDataFromJson();
        }


        const name = localStorage.getItem('name'),
            ver = localStorage.getItem('version'),
            author = localStorage.getItem('author');

        console.log(localStorage);

        return {name, ver, author};

    }

    private loadDataFromJson() {
        localStorage.setItem('update:', String(new Date().getMilliseconds()));
        this.getJSON()
            .pipe(delay(5000))
            .subscribe(data => {
            for (const key of Object.keys(data)) {
                localStorage.setItem(key, data[key]);
            }
        });
    }

    private getJSON(): Observable<any> {
        return this.http.get('/assets/app-settings.json');
    }

}
