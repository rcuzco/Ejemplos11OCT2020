import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-componente-usando-pipes',
    templateUrl: './componente-usando-pipes.component.html',
    styleUrls: ['./componente-usando-pipes.component.css']
})
export class ComponenteUsandoPipesComponent implements OnInit
{
    sueldoEmpleado: number;
    datosUsuario: Usuario;

    constructor()
    {
        this.datosUsuario = { Nombre: 'Paco', Sexo: 'M', Sueldo: 5000 };
    }

    ngOnInit(): void
    {
        
    }

}

class Usuario
{
    Nombre: string;
    Sexo: string;
    Sueldo: number;
}
