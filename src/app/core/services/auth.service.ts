import {Injectable} from '@angular/core';
import {CoreModule} from '../core.module';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {delay, tap} from 'rxjs/internal/operators';

@Injectable({
    providedIn: CoreModule
})
export class AuthService {
    isLoggedIn = false;

    private subject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isLoggedIn);
    // store the URL so we can redirect after logging in
    redirectUrl: string;

    isLogin(): Observable<boolean> {
        return this.subject.asObservable();
    }

    login(): Observable<boolean> {
        return of(true)
            .pipe(delay(1000), tap(val => (this.isLoggedIn = val)));
    }

    logout(): void {
        this.isLoggedIn = false;
    }
}