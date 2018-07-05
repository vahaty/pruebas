import { Component } from '@angular/core';

import { ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public lat: number;
  public lng: number;
  public tipoMapa: String;
  public minMap: String;

  public origin: any;
  public destination: any;

  public llegarView: boolean;


  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
  }

  ngOnInit() {
    this.zoom = 17;
    this.latitude = 39.8282;
    this.longitude = -98.5795;
    this.lat = 39.374869;
    this.lng = -5.393419;
    this.llegarView = false;
    this.tipoMapa = 'hybrid';
    this.minMap = 'terrain';

    this.prueba = {
      lat : 39.8282,
      lng : - 98.5795
  }

    // create search FormControl
    this.searchControl = new FormControl();

// set current position
this.setCurrentPosition();

//   load Places Autocomplete
this.mapsAPILoader.load().then(() => {
  const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
    types: ['address']
  });
  autocomplete.addListener('place_changed', () => {
    this.ngZone.run(() => {
      const place: google.maps.places.PlaceResult = autocomplete.getPlace();

      if (place.geometry === undefined || place.geometry === null) {
        return;
      }

      this.latitude = place.geometry.location.lat();
      this.longitude = place.geometry.location.lng();
      this.zoom = 12;
    });
  });
});
  }

  private setCurrentPosition() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    });
  }
}

  public comoLlegar() {
  this.llegarView = true;
  this.origin = { lat: this.latitude, lng: this.longitude };
  this.destination = { lat: 39.374869, lng: -5.393419 };
}


  public cambio(value) {
  this.minMap = (value === 'roadmap') ? 'satellite' : 'roadmap';
  this.tipoMapa = value;
}

}
