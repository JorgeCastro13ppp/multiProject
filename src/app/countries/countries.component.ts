import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';
import { API, Flags } from './interfaces/flags.interface';
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';
import { SpinnerService } from '../shared/services/spinner.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {


  constructor(private countriesService:CountriesService) { }

  ngOnInit(): void {

  }


}
