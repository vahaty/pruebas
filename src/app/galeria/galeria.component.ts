import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

declare var jQuery: any;
declare var $: any;


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  public id: number;
  public slides: any;
  constructor() { }

  ngOnInit() {
    this.slides = [
      {
        id: 1,
        src: '../../assets/equilibradoRuedas.JPG',
        active: true,
        title: 'Equilibrado de Ruedas'
      },
      {
        id: 2,
        src: '../../assets/AlineadoDirecciones.JPG',
        active: false,
        title: 'Alineado de Direcciones'
      },
      {
        id: 3,
        src: '../../assets/MontadoraNeumáticos.JPG',
        active: false,
        title: 'Montadora de Neumáticos'
      },
      {
        id: 4,
        src: '../../assets/CambioNeumaticos.JPG',
        active: false,
        title: 'CAMBIO DE NEUMÁTICOS'
      },
      {
        id: 5,
        src: '../../assets/MontadoraEspeciales.JPG',
        active: false,
        title: 'Montadora Especiales'
      },
      {
        id: 6,
        src: '../../assets/MontadoraIndustriales.JPG',
        active: false,
        title: 'Montadora Industriales'
      }
    ];
    this.id = 0;
  }
  indicadores(indicador) {
    console.log(indicador);
    for (let index = 0; index < this.slides.length; index++) {
      if (this.slides[index].active) {
        this.slides[index].active = false;
      }
    }
    this.slides[indicador - 1].active = true;
  }

  next() {
    let sig = 0;
    for (let index = 0; index < this.slides.length; index++) {
      console.log(this.slides[index]);
      if (this.slides[index].active) {
        this.slides[index].active = false;
        if (index < this.slides.length - 1) {
          sig = index + 1;
        }
      }
    }
    this.slides[sig].active = true;
  }
  previous() {
    let ant = this.slides.length - 1;
    for (let index = 0; index < this.slides.length; index++) {
      if (this.slides[index].active) {
        this.slides[index].active = false;
        if (index > 0) {
          ant = index - 1;
        }
      }
      this.slides[ant].active = true;
    }
  }

}
