import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnEurosPipe } from './pipes/en-euros.pipe';
import { ComponenteUsandoPipesComponent } from './componentes/componente-usando-pipes/componente-usando-pipes.component';
import { AplicarTituloPipe } from './pipes/aplicar-titulo.pipe';
import { EnRojoDirective } from './directivas/en-rojo.directive';

@NgModule({
  declarations: [
    AppComponent,
    EnEurosPipe,
    ComponenteUsandoPipesComponent,
    AplicarTituloPipe,
    EnRojoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
