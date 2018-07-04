import { MapsAPILoader } from '@agm/core';
import { Component } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tipoMapa = 'hybrid';
  lat = 39.374869;
  lng = -5.393419;
  zoom = 4;

  // de un punto a otro
  origin = { lat: 39.374869, lng: -5.393800 };
  destination = { lat: 39.374869, lng: -5.393419 };

  public cambio(value) {
    this.tipoMapa = value;
    console.log(this.tipoMapa);
  }

}
