import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neumaticos',
  templateUrl: './neumaticos.component.html',
  styleUrls: ['./neumaticos.component.css']
})
export class NeumaticosComponent implements OnInit {

  public selectedValue: any;
  public altura: any;
  public diametro: any;
  public anchura: any;
  public anc: any;
  public alt: any;
  public dia: any;
  public neumaticos: any;
  public ver: any = [];

  constructor() { }

  ngOnInit() {
    this.diametro = [{ value: 10 },
    { value: 12 },
    { value: 13 },
    { value: 14 },
    { value: 15 },
    { value: 16 },
    { value: 17 },
    { value: 18 },
    { value: 19 },
    { value: 20 },
    { value: 21 },
    { value: 22 },
    { value: 34 },
    { value: 37 }];


    this.altura = [{ value: 25 },
    { value: 30 },
    { value: 35 },
    { value: 38 },
    { value: 40 },
    { value: 45 },
    { value: 49 },
    { value: 50 },
    { value: 55 },
    { value: 60 },
    { value: 65 },
    { value: 70 },
    { value: 75 },
    { value: 80 },
    { value: 85 },
    { value: 90 }];

    this.anchura = [{ value: 2.75 },
    { value: 5 },
    { value: 7 },
    { value: 7.5 },
    { value: 30 },
    { value: 31 },
    { value: 32 },
    { value: 33 },
    { value: 35 },
    { value: 37 },
    { value: 38 },
    { value: 40 },
    { value: 60 },
    { value: 70 },
    { value: 75 },
    { value: 80 },
    { value: 90 },
    { value: 100 },
    { value: 110 },
    { value: 115 },
    { value: 120 },
    { value: 125 },
    { value: 130 },
    { value: 135 },
    { value: 140 },
    { value: 145 },
    { value: 150 },
    { value: 155 },
    { value: 160 },
    { value: 165 },
    { value: 170 },
    { value: 175 },
    { value: 180 },
    { value: 185 },
    { value: 190 },
    { value: 195 },
    { value: 200 },
    { value: 205 },
    { value: 215 },
    { value: 225 },
    { value: 235 },
    { value: 240 },
    { value: 245 },
    { value: 255 },
    { value: 265 },
    { value: 275 },
    { value: 285 },
    { value: 295 },
    { value: 305 },
    { value: 315 },
    { value: 325 },
    { value: 335 },
    { value: 345 },
    { value: 355 },
    { value: 371 },
    { value: 385 },
    { value: 445 },
    { value: 750 }];

    this.anc = this.anchura[31];
    this.alt = this.altura[10];
    this.dia = this.diametro[3];

    this.neumaticos = [{
      marca: 'Duraturn',
      anchura: 175,
      altura: 65,
      diametro: 14,
      modelo: 'Mozzo 45 82H',
      precio: 41.11,
      imagen: '../../assets/duraturn/duraturn-mozzo-s-175-65-r14-82t.jpg',
      resistencia: 'C',
      frenada: 'B',
      nivelSonoro: 70
    },
    {
      marca: 'Duraturn',
      anchura: 175,
      altura: 65,
      diametro: 14,
      modelo: 'Mozzo 45 82H',
      precio: 41.11,
      imagen: '../../assets/duraturn/duraturn-mozzo-s-175-65-r14-82t.jpg',
      resistencia: 'C',
      frenada: 'B',
      nivelSonoro: 70
    },
    {
      marca: 'Duraturn',
      anchura: 185,
      altura: 60,
      diametro: 15,
      modelo: 'Mozzo 45 84H',
      precio: 50.73,
      imagen: ''
    }];
  }

  search() {
    this.neumaticos.forEach(element => {
      if (element.anchura === this.anc.value && element.altura === this.alt.value && element.diametro === this.dia.value) {
        this.ver.push(element);

      }
    });
  }

}
