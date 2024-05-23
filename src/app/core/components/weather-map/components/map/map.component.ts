import { AfterViewInit, Component, OnInit,  } from '@angular/core';

import * as L from 'leaflet';
import { WeatherMapService } from '../../../../services/weather-map.service';
import { environmentsMap } from '../../../../../common/environments/environments.map';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit,AfterViewInit {

  private map: any;
  private layers: any;
  private currentLayer: any;

  constructor(private weatherMapService:WeatherMapService){}

  ngAfterViewInit(): void {
    this.initMap();
  }
  ngOnInit(): void {
  }

  initMap(): void {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3
    });
    console.log('Map created:', this.map);
    //Capa 1: openstreetmap
    this.layers = {
      openstreet : L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
    }),
    //Capa 2: openweathermap wind
    wind : L.tileLayer('https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid={accessToken}', {
      maxZoom: 18,
      minZoom: 3,
      accessToken:environmentsMap.apiKey
    }),
    //Capa 3: openweathermap clouds
    clouds : L.tileLayer('https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid={accessToken}', {
      maxZoom: 18,
      minZoom: 3,
      accessToken:environmentsMap.apiKey
    }),
    //Capa 4: openweathermap precipitation
    precipitation : L.tileLayer('https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid={accessToken}', {
      maxZoom: 18,
      minZoom: 3,
      accessToken:environmentsMap.apiKey
    }),
    //Capa 5: openweathermap pressure
    pressure : L.tileLayer('https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid={accessToken}', {
      maxZoom: 18,
      minZoom: 3,
      accessToken:environmentsMap.apiKey
    }),
    //Capa 6: openweathermap temp
    temperature : L.tileLayer('https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid={accessToken}', {
      maxZoom: 18,
      minZoom: 3,
      accessToken:environmentsMap.apiKey
    })
    }



    console.log('Tiles created:', this.layers.openstreet);
    this.layers.openstreet.addTo(this.map);
    this.currentLayer = this.layers.openstreet;
    console.log(this.layers.openstreet);

  }

  showLayer(layerName:string):void{
    if(this.currentLayer && this.currentLayer!==this.layers.openstreet){
      this.map.removeLayer(this.currentLayer);
    }
    this.currentLayer=this.layers[layerName];
    this.map.addLayer(this.currentLayer);
    console.log('layer added ',this.currentLayer)
  }

}
