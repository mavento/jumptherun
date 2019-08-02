# Jump The Run

![preview](resources/preview.jpg)

A modern and clean looking template for presenting content. Build with Angular Material and some custom CSS

https://material.angular.io



##Integrate the Google Maps API

[Integrating Google Maps API w/ Angular 7+](https://medium.com/@jkeung/integrating-google-maps-api-w-angular-7-e7672396ce2d)


```
npm install --save @types/googlemaps

```
Link to the Google Maps JavaScript file
```
<head>
...
<script src="https://maps.googleapis.com/maps/api/js?key=YOURKEY"></script>
...
</head>
<body>
<app-root></app-root>
</body>
```
Add the HTML element
``` 
<div class="map" #map>
```
Import the Google Map types into app.component.ts
```
import {} from 'googlemaps';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jumptherun';
}
```
Create index.d.ts (provide typescript type information about a module that's written in JavaScript)

``` 
declare module 'googlemaps';
```
Initialize the map
``` 
import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('map', {static: true}) mapElement: any;
  map: google.maps.Map;

  constructor() { }

  ngOnInit() {
    const mapProperties = {
      center: new google.maps.LatLng(36.721275, -4.421399),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
  }

}
```
##Implement smooth scrolling
Implement each section with a template reference variable (#var)
``` 
<section id="contact" #contact>
 ...
</section>

```
Use HTML DOM scrollIntoView Method

https://developer.mozilla.org/es/docs/Web/API/Element/scrollIntoView

``` 
export class HomeComponent implements OnInit {

  @ViewChild('clients',{static:true}) clients:ElementRef;
...
  onContact() {
    this.contact.nativeElement.scrollIntoView({behavior: 'smooth'});
  }
}

```

