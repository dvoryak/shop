import { Injectable } from '@angular/core';
import {CoreModule} from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class ConfigOptionService {

  private obj = {id: '1', login: 'pavel', email: 'pavel100500@gmail.com'};

  constructor() { }

  public setObject(obj: any): void {
    this.obj.id = obj.id;
    this.obj.login = obj.login;
    this.obj.email = obj.email;
  }

  public getObject(): any {
    return this.obj;
  }
}
