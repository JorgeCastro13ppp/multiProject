import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WeatherMapService } from 'src/app/core/services/weather-map.service';

@Component({
  selector: 'app-search-map',
  templateUrl: './search-map.component.html',
  styleUrls: ['./search-map.component.scss']
})
export class SearchMapComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

}
