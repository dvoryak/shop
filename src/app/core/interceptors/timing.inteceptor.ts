import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const start = new Date().getMilliseconds();

        console.log(req);

        return next
            .handle(req)
            .pipe(map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('Timing interceptor for request ' + event.url + ': ' + (new Date().getMilliseconds() - start));
                    return event;
                }
            }));
    }

}