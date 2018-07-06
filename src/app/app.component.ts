import { Component } from '@angular/core';

import { OnInit } from '@angular/core';


declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public zoom: number;
  public lat: number;
  public lng: number;
  public tipoMapa: String;

  public origin: any;
  public destination: any;

  constructor() { }

  ngOnInit() {
    this.zoom = 15;
    this.latitude = 39.374869;
    this.longitude = -5.393419;
    this.tipoMapa = 'roadmap';
  }

  public cambio(value) {
    this.tipoMapa = value;
  }

}
