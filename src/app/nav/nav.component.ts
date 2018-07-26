import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public activar: number;
  constructor() { }

  ngOnInit() {
    this.activar = 0;
  }

  cambiar(value) {
    this.activar = value;
  }
}
