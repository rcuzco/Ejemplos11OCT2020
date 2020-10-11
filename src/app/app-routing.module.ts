import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteUsandoPipesComponent } from './componentes/componente-usando-pipes/componente-usando-pipes.component';

const routes: Routes =
    [
        {path:'', component:ComponenteUsandoPipesComponent}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
