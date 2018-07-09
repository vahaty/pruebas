import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {


  public selectedValue: any;
  public altura: any;
  public diametro: any;
  public anchura: any;
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
  }

}
