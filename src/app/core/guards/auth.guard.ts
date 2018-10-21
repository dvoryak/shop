import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {CoreModule} from '../core.module';
import {AuthService} from '../services/auth.service';

@Injectable({
    providedIn: CoreModule
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService,
                private router: Router) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        console.log('can activate');
        const url = state.url;
        return this.checkLogin(url);
    }

    private checkLogin(url: string): boolean {
        if (this.authService.isLoggedIn === true) {
            return true;
        }

        this.authService.redirectUrl = url;

        this.router.navigate(['/login']);

        return false;
    }
}
