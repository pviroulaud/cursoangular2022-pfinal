import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';

import { CursoService } from './core/servicios/curso.service';
import { UsuarioService } from './core/servicios/usuario.service';
import { RolesService } from './core/servicios/roles.service';
import { AppMaterialModule } from './core/app.material.module';


@NgModule({
  declarations: [
    /* Declaracion de componentes */
    AppComponent
  ],
  imports: [
    /* Modulos que se importan para su utilizacion */
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    CoreModule
  ],
  providers: [
    /* Servicios que se incorporan para su utilizacion (Singleton) */
    CursoService,
    UsuarioService,
    RolesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
