import { Component, OnInit } from '@angular/core';
import { AemetService } from './services/aemet.service';
import { APIAemet } from './interfaces/interface.aemet';
import { Data, Dia, Prediccion } from './interfaces/interface.data';

@Component({
  selector: 'app-weather-aemet',
  templateUrl: './weather-aemet.component.html',
  styleUrls: ['./weather-aemet.component.scss']
})
export class WeatherAemetComponent implements OnInit {

  apiAemet?:APIAemet;
  dataApi?:Data[];
  prediccionDaily?: Prediccion[];
  dayData:Dia[] = [];

  constructor(private aemetService:AemetService) { }

  ngOnInit(): void {
    this.aemetService.getApiAemet().subscribe(
      api => {
        this.apiAemet = api;
        this.aemetService.getDataApi(this.apiAemet.datos).subscribe(
          data => {
            this.dataApi = data;
            let dayDataAux:Dia[] = [];
            data.forEach((item)=>{
              this.prediccionDaily = [item.prediccion];
              this.prediccionDaily.forEach((prediccion)=>{
                prediccion.dia.forEach((dia)=>{
                  // this.dayData = [dia];
                  dayDataAux.push(dia);
                })
              })
            })

            this.dayData = dayDataAux;
          }
        )
      }
    );
  }

  getBackgroundImage(day: any): string {
    const probPrecipitacion = day.probPrecipitacion[0].value;
    if (probPrecipitacion <= 20) {
      return '../../assets/amcharts_weather_icons_1.0.0/animated/day.svg';
    } else if (probPrecipitacion <= 60) {
      return '../../assets/amcharts_weather_icons_1.0.0/animated/cloudy.svg';
    } else {
      return '../../assets/amcharts_weather_icons_1.0.0/animated/rainy-7.svg';
    }
  }

}







