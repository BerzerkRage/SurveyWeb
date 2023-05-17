import { Pipe,PipeTransform } from "@angular/core";

@Pipe({name : 'conversor'})
export class ConversorPipe implements PipeTransform {

    transform(value:number, multipler:number) {
        let result = value*multipler;
        return result;
    }
    
}