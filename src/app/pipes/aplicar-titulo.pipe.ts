import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'aplicarTitulo'
})
export class AplicarTituloPipe implements PipeTransform
{

    transform(nombre: string, sexo: string): string
    {
        if (sexo.toLowerCase() === 'f')
        {
            return 'Señora/Señorita ' + nombre;
        }
        else if (sexo.toLowerCase() === 'm')
        {
            return 'Señor/Señorito ' + nombre;
        }
        else
        {
            return 'Persona ' + nombre;
        }        
    }

}
