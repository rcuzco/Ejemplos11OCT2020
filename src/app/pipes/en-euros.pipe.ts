import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'enEuros'
})
export class EnEurosPipe implements PipeTransform
{

    transform(value: number): string
    {
        return value + " euros (€)";
    }

}
