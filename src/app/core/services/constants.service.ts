import { Injectable } from '@angular/core';
import {CoreModule} from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class ConstantsService {
  private obj = {
    app: 'Product shop',
    ver: '1.0'
  };

  constructor() { }

  getObj(): any {
    return this.obj;
  }
}
