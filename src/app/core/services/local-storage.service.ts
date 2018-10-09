import { Injectable } from '@angular/core';
import {CoreModule} from '../core.module';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: CoreModule
})
export class LocalStorageService {

  private items: Array<any> = [];
  private subject: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>(this.items);

  constructor() { }

  pushItem(item: any) {
    this.items.push(item);
    this.subject.next(this.items);
  }

  findAll(): Observable<Array<any>> {
    return this.subject.asObservable();
  }
}
