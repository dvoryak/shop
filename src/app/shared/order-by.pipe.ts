import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name: 'sortBy'
})
export class OrderByPipe implements PipeTransform {

    transform(array: Array<Object>, field: string): any {
        if (array == null) {
            return;
        }

        array.sort((a, b) => {
            return a[field] - b[field];
        });

        return array;
    }
}
