import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { MarcasComponent } from './marcas/marcas.component';
import { QuienSomosComponent } from './quien-somos/quien-somos.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { FooterComponent } from './footer/footer.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { MapaComponent } from './mapa/mapa.component';
import { NeumaticosComponent } from './neumaticos/neumaticos.component';
import { ItvComponent } from './itv/itv.component';

const appRoutes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'nosotros', component: QuienSomosComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'neumaticos', component: NeumaticosComponent },
  { path: 'itv', component: ItvComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MarcasComponent,
    QuienSomosComponent,
    PrincipalComponent,
    FooterComponent,
    GaleriaComponent,
    MapaComponent,
    NeumaticosComponent,
    ItvComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmDirectionModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAHPLi3A0LbcUy8vOSee0KBprfmhLeTPUs',
      libraries: ['places']
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
