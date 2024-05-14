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
  horaActual = new Date().getHours();

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

  getUvSvg(value: any): string {
    switch(value) {
      case value = 1:
        return '../../assets/weather-icons-master/design/line/animation-ready/uv-index-1.svg';
      case value = 2:
        return '../../assets/weather-icons-master/design/line/animation-ready/uv-index-2.svg';
      case value = 3:
        return '../../assets/weather-icons-master/design/line/animation-ready/uv-index-3.svg';
      case value = 4:
        return '../../assets/weather-icons-master/design/line/animation-ready/uv-index-4.svg';
      case value = 5:
        return '../../assets/weather-icons-master/design/line/animation-ready/uv-index-5.svg';
      case value = 6:
        return '../../assets/weather-icons-master/design/line/animation-ready/uv-index-6.svg';
      case value = 7:
        return '../../assets/weather-icons-master/design/line/animation-ready/uv-index-7.svg';
      case value = 8:
        return '../../assets/weather-icons-master/design/line/animation-ready/uv-index-8.svg';
      case value = 9:
        return '../../assets/weather-icons-master/design/line/animation-ready/uv-index-9.svg';
      case value = 10:
        return '../../assets/weather-icons-master/design/line/animation-ready/uv-index-10.svg';
      case value = 11:
        return '../../assets/weather-icons-master/design/line/animation-ready/uv-index-11.svg';
      default:
        return '../../assets/weather-icons-master/design/line/animation-ready/uv-index.svg';
    }
  }

  getPrecipitationColor(value:any) :string{
    if (value>=0 && value<=14){
      return 'text-blue-1';
    }
    else if (value>=15 && value<=31){
      return 'text-blue-2';
    }else if (value>=31 && value<=50){
      return 'text-blue-3';
    }
    else if (value>=51 && value<=74){
      return 'text-blue-4';
    }
    else if (value>=75 && value<=100){
      return 'text-blue-5';
    } else {
      return '';
    }

  }

  getPrecipitationSvg(value: any): string {
    if (value >= 1 && value <= 20) {
      return '../../assets/weather-icons-master/design/line/animation-ready/raindrop.svg';
    } else if (value >= 21 && value <= 40) {
      return '../../assets/weather-icons-master/design/line/animation-ready/raindrops.svg';
    } else if (value >= 41 && value <= 60) {
      return '../../assets/weather-icons-master/design/fill/animation-ready/raindrop.svg';
    } else if (value >= 61 && value <= 80) {
      return '../../assets/weather-icons-master/design/fill/animation-ready/raindrops.svg';
    } else if (value >= 81) {
      return '../../assets/weather-icons-master/design/line/animation-ready/rain.svg';
    } else {
      return '../../assets/weather-icons-master/design/line/export/wi_raindrop.svg';
    }
  }

  getWindSvg(value: any):string {
    if (value >= 1 && value <= 9) {
      return '../../assets/weather-icons-master/design/line/animation-ready/wind-beaufort-1.svg';
    } else if (value >= 10 && value <= 18) {
      return '../../assets/weather-icons-master/design/line/animation-ready/wind-beaufort-2.svg';
    } else if (value >= 19 && value <= 27) {
      return '../../assets/weather-icons-master/design/line/animation-ready/wind-beaufort-3.svg';
    }else if (value >= 28 && value <= 36) {
      return '../../assets/weather-icons-master/design/line/animation-ready/wind-beaufort-4.svg';
    } else if (value >= 37 && value <= 45) {
      return '../../assets/weather-icons-master/design/line/animation-ready/wind-beaufort-5.svg';
    }else if (value >= 46 && value <= 54) {
      return '../../assets/weather-icons-master/design/line/animation-ready/wind-beaufort-6.svg';
    } else if (value >= 55 && value <= 63) {
      return '../../assets/weather-icons-master/design/line/animation-ready/wind-beaufort-7.svg';
    }else if (value >= 64 && value <= 72) {
      return '../../assets/weather-icons-master/design/line/animation-ready/wind-beaufort-8.svg';
    } else if (value >= 73 && value <= 81) {
      return '../../assets/weather-icons-master/design/line/animation-ready/wind-beaufort-9.svg';
    }else if (value >= 82 && value <= 90 ) {
      return '../../assets/weather-icons-master/design/line/animation-ready/wind-beaufort-10.svg';
    } else if (value >= 91 && value <= 99) {
      return '../../assets/weather-icons-master/design/line/animation-ready/wind-beaufort-11.svg';
    }else if (value >= 100 ) {
      return '../../assets/weather-icons-master/design/line/animation-ready/wind-beaufort-12.svg';
    } else {
      return '../../assets/weather-icons-master/design/line/animation-ready/wind-beaufort-0.svg';
    }
  }


}







