import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('map', {static: true}) mapElement: any;
  map: google.maps.Map;

  @ViewChild('showcase', {static: true}) showcase: ElementRef;

  @ViewChild('features', {static: true}) features: ElementRef;

  @ViewChild('details', {static: true}) details: ElementRef;

  @ViewChild('contact', {static: true}) contact: ElementRef;

  constructor() {
  }

  ngOnInit() {
    const mapProperties = {
      center: new google.maps.LatLng(36.721275, -4.421399),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
  }

  scrollTo(target) {
    this.getElement(target).nativeElement.scrollIntoView({behavior: 'smooth'});
  }

  private getElement(target: string): ElementRef {
    switch (target) {
      case 'overview':
        return this.showcase;
      case 'features':
        return this.features;
      case 'details':
        return this.details;
      case 'contact':
        return this.contact;
      default:
        return this.showcase;
    }
  }
}
