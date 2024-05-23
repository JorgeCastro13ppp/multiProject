import { Component, OnInit } from '@angular/core';
import { AemetService } from '../../services/aemet.service';
import { APIAemet } from '../../../shared/interfaces/interface.aemet';
import { Data, Dia, Prediccion } from '../../../shared/interfaces/interface.data';
import { SpinnerService } from '../../../utils/services/spinner.service';
import { MunicipalityService } from '../../services/municipality.service';
import { ActivatedRoute } from '@angular/router';

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
  postalCodeCc:string = '10037';

  constructor(private aemetService:AemetService,public spinner:SpinnerService,private municipality:MunicipalityService,private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.postalCodeCc = params['munCode'] ?? '10037';
      this.spinner.showSpinner();
      this.aemetService.getApiAemet(this.postalCodeCc).subscribe(
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
              this.spinner.hideSpinner();
              }
            )
          }
        );
      });

  }

  search():void {
    this.aemetService.getApiAemet(this.postalCodeCc).subscribe(
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

  getWindDirectionSvg(value:any):string {
    switch(value){
       case value='O':
        return '../../assets/cardinates/weast.svg';
        case value='E':
        return '../../assets/cardinates/east.svg';
        case value='N':
        return '../../assets/cardinates/north.svg';
        case value='S':
        return '../../assets/cardinates/south.svg';
        case value='SO':
        return '../../assets/cardinates/southWeast.svg';
        case value='SE':
        return '../../assets/cardinates/southEast.svg';
        case value='NO':
        return '../../assets/cardinates/northWeast.svg';
        case value='NE':
        return '../../assets/cardinates/northWeast.svg';
        default:
        return '../../assets/weather-icons-master/design/fill/export/wi_windsock.svg';
    }
  }

  getStatusSky(value:any):string {
    switch(value){
      case value = 'Despejado':
        return '../../assets/weather-icons-master/design/fill/animation-ready/clear-day.svg';
        case value = 'Despejado noche':
        return '../../assets/weather-icons-master/design/fill/animation-ready/clear-night.svg';
        case value = 'Poco nuboso':
        return '../../assets/weather-icons-master/design/fill/animation-ready/partly-cloudy-day.svg';
        case value = 'Poco nuboso noche':
        return '../../assets/weather-icons-master/design/fill/animation-ready/partly-cloudy-night.svg';
        case value = 'Intervalos nubosos':
        return '../../assets/weather-icons-master/design/fill/animation-ready/partly-cloudy-day.svg';
        case value = 'Intervalos nubosos noche':
        return '../../assets/weather-icons-master/design/fill/animation-ready/partly-cloudy-night.svg';
        case value = 'Nuboso':
        return '../../assets/weather-icons-dev/design/fill/final/overcast-day.svg';
        case value = 'Nuboso noche':
        return '../../assets/weather-icons-dev/design/fill/final/overcast-night';
        case value = 'Muy nuboso':
        return '../../assets/weather-icons-master/design/fill/animation-ready/overcast.svg';
        case value = 'Cubierto':
        return '../../assets/weather-icons-master/design/fill/animation-ready/overcast.svg';
        case value = 'Nubes altas':
        return '../../assets/weather-icons-dev/design/fill/final/cloud-up.svg';
        case value = 'Nubes altas noche':
        return '../../assets/weather-icons-dev/design/fill/final/cloud-up.svg';
        case value = 'Intervalos nubosos con lluvia escasa':
        return '../../assets/weather-icons-master/design/fill/animation-ready/partly-cloudy-day-drizzle.svg';
        case value = 'Intervalos nubosos con lluvia escasa noche':
        return '../../assets/weather-icons-master/design/fill/animation-ready/partly-cloudy-night-drizzle.svg';
        case value = 'Nuboso con lluvia escasa':
        return '../../assets/weather-icons-master/design/fill/animation-ready/partly-cloudy-day-drizzle.svg';
        case value = 'Nuboso con lluvia escasa noche':
        return '../../assets/weather-icons-master/design/fill/animation-ready/partly-cloudy-night-drizzle.svg';
        case value = 'Muy nuboso con lluvia escasa':
        return '../../assets/weather-icons-dev/design/fill/final/overcast-rain.svg';
        case value = 'Cubierto con lluvia escasa':
        return '../../assets/weather-icons-dev/design/fill/final/overcast-rain.svg';
        case value = 'Intervalos nubosos con lluvia':
        return '../../assets/weather-icons-master/design/fill/animation-ready/partly-cloudy-day-rain.svg';
        case value = 'Intervalos nubosos con lluvia noche':
        return '../../assets/weather-icons-master/design/fill/animation-ready/partly-cloudy-night-rain.svg';
        case value = 'Nuboso con lluvia':
        return '../../assets/weather-icons-master/design/fill/animation-ready/partly-cloudy-day-rain.svg';
        case value = 'Nuboso con lluvia noche':
        return '../../assets/weather-icons-master/design/fill/animation-ready/partly-cloudy-night-rain.svg';
        case value = 'Muy nuboso con lluvia':
        return '../../assets/weather-icons-master/design/fill/animation-ready/partly-cloudy-day-rain.svg';
        case value = 'Cubierto con lluvia':
        return '../../assets/weather-icons-master/design/fill/animation-ready/partly-cloudy-night-rain.svg';
        case value = 'Intervalos nubosos con nieve escasa':
        return '../../assets/weather-icons-master/design/fill/animation-ready/partly-cloudy-day-snow.svg';
        case value = 'Intervalos nubosos con nieve escasa noche':
        return '../../assets/weather-icons-master/design/fill/animation-ready/partly-cloudy-night-snow.svg';
        case value = 'Nuboso con nieve escasa':
        return '../../assets/weather-icons-master/design/fill/animation-ready/overcast-day-snow.svg';
        case value = 'Nuboso con nieve escasa noche':
        return '../../assets/weather-icons-master/design/fill/animation-ready/overcast-night-snow.svg';
        case value = 'Muy nuboso con nieve escasa':
        return '../../assets/weather-icons-dev/design/fill/final/overcast-snow.svg';
        case value = 'Cubierto con nieve escasa':
        return '../../assets/weather-icons-dev/design/fill/final/overcast-night-snow.svg';
        case value = 'Intervalos nubosos con nieve':
        return '../../assets/weather-icons-master/design/fill/animation-ready/partly-cloudy-day-snow.svg';
        case value = 'Intervalos nubosos con nieve noche':
        return '../../assets/weather-icons-master/design/fill/animation-ready/partly-cloudy-night-snow.svg';
        case value = 'Nuboso con nieve':
        return '../../assets/weather-icons-master/design/fill/animation-ready/partly-cloudy-day-snow.svg';
        case value = 'Nuboso con nieve noche':
        return '../../assets/weather-icons-master/design/fill/animation-ready/partly-cloudy-night-snow.svg';
        case value = 'Muy nuboso con nieve':
        return '../../assets/weather-icons-master/design/fill/animation-ready/partly-cloudy-day-snow.svg';
        case value = 'Cubierto con nieve':
        return '../../assets/weather-icons-master/design/fill/animation-ready/thunderstorms-snow.svg';
        case value = 'Intervalos nubosos con tormenta':
        return '../../assets/weather-icons-dev/design/fill/final/thunderstorms-day-overcast-rain.svg';
        case value = 'Intervalos nubosos con tormenta noche':
        return '../../assets/weather-icons-dev/design/fill/final/thunderstorms-night-overcast.svg';
        case value = 'Nuboso con tormenta':
        return '../../assets/weather-icons-master/design/fill/animation-ready/thunderstorms-day-rain.svg';
        case value = 'Nuboso con tormenta noche':
        return '../../assets/weather-icons-master/design/fill/animation-ready/thunderstorms-night-rain.svg';
        case value = 'Muy nuboso con tormenta':
        return '../../assets/weather-icons-dev/design/fill/final/thunderstorms-extreme-rain.svg';
        case value = 'Cubierto con tormenta':
        return '../../assets/weather-icons-dev/design/fill/final/thunderstorms-extreme-rain.svg';
        case value = 'Intervalos nubosos con tormenta y lluvia escasa':
        return '../../assets/weather-icons-master/design/fill/animation-ready/thunderstorms-day-rain.svg';
        case value = 'Intervalos nubosos con tormenta y lluvia escasa noche':
        return '../../assets/weather-icons-master/design/fill/animation-ready/thunderstorms-night-rain.svg';
        case value = 'Nuboso con tormenta y lluvia escasa':
        return '../../assets/weather-icons-dev/design/fill/final/thunderstorms-day-overcast-rain.svg';
        case value = 'Nuboso con tormenta y lluvia escasa noche':
        return '../../assets/weather-icons-dev/design/fill/final/thunderstorms-night-overcast-rain.svg';
        case value = 'Muy nuboso con tormenta y lluvia escasa':
        return '../../assets/weather-icons-dev/design/fill/final/thunderstorms-extreme-rain.svg';
        case value = 'Cubierto con tormenta y lluvia escasa':
        return '../../assets/weather-icons-dev/design/fill/final/thunderstorms-extreme-rain.svg';
        case value = 'Niebla ':
        return '../../assets/weather-icons-dev/design/fill/final/mist.svg';
        case value = 'Bruma':
        return '../../assets/weather-icons-master/design/fill/animation-ready/fog.svg';
        case value = 'Calima':
        return '../../assets/weather-icons-master/design/fill/animation-ready/haze.svg';
        default:
          return'';
    }
  }


}







