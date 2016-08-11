import {PipeTransform, Pipe} from "@angular/core";

@Pipe({name: 'range'})

export class RangePipe implements PipeTransform {

    transform(input:number[], total:number, start:number, increment:number):number[] {


        start = start || 0;
        increment = increment || 1;
        var arr:any = Array()
        for (var i = 0; i < total; i++) {
            var j = start + i * increment;
            arr.push(j);
        }
        return arr;
    }

}