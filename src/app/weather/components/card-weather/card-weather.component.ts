import { Component, Input, OnInit } from '@angular/core';
import { Origen } from '../../interfaces/data.interface';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-card-weather',
  templateUrl: './card-weather.component.html',
  styleUrls: ['./card-weather.component.scss']
})
export class CardWeatherComponent implements OnInit {

  @Input() dataUrl?:string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {

  }


}
