import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

   datosMET: any = null;
    datosPRED: any[] = [];
    sta: any[] = [];
    staP: any[] = [];
    pinta: string = "cross";
    pintaP: string = "cross";
    ini: number = 0;
    iniP: number = 0;
    map: string = "";

  constructor() { }

  ngOnInit(): void {
    this.initializeMap();
  }

  initializeMap():void {
    const map = L.map('mapa').setView([40.5,3.5],8);

    const IGN = L.tileLayer.wms("https://www.ign.es/wms-inspire/ign-base",{
      layers: 'IGNBaseTodo-gris',
      format: 'image/png',
      transparent: true,
      attribution: "BCN IGN  © 2024"
    });

    IGN.addTo(map);
  }

  //Configurar a partir de leafMET.js


}
