import {InjectionToken} from '@angular/core';
import {InputData} from '../../shared/input-data';

export const Generator = new InjectionToken<string>('Generator');

export function GeneratorService(count: number) {

  return function(): string {
    const data = new InputData().getData();
    let out = '';
    console.log(data);
    for (let i = 0; i < count; i++) {
      out = out + data[Math.floor(Math.random() * data.length)];
    }
    console.log(out);
    return out;
  };

}
