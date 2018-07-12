import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public zoom: number;
  public lat: number;
  public lng: number;
  public tipoMapa: String;

  public origin: any;
  public destination: any;
  public anchura: any;
  public selectedValue: any;
  public altura: any;
  public diametro: any;
  constructor() { }

  ngOnInit() {
    this.zoom = 15;
    this.latitude = 39.374869;
    this.longitude = -5.393419;
    this.tipoMapa = 'roadmap';
  }

}
