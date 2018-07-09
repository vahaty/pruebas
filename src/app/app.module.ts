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

const appRoutes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'nosotros', component: QuienSomosComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MarcasComponent,
    QuienSomosComponent,
    PrincipalComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
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
