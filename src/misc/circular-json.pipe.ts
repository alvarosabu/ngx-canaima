import {
    Pipe,
    PipeTransform
} from '@angular/core';
import * as JSON from '../../node_modules/circular-json';

@Pipe({
    name: 'circularJson'
})
export class CircularJsonPipe implements PipeTransform {
    public transform(obj: any): string {
        return JSON.stringify(obj, null, 2);
    }
}
