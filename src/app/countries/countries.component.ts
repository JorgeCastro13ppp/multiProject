import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';
import { API, Flags } from './interfaces/flags.interface';
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';
import { SpinnerService } from '../shared/services/spinner.service';
import { DataService } from './services/data.service';
import { All } from './interfaces/all.interface';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countries: All[] = [];

  constructor(private countriesService: CountriesService, private spinnerC: SpinnerService) { }

  ngOnInit(): void {
    this.spinnerC.showSpinner();
    this.countriesService.getAllCountries().subscribe(
      (countries: All[]) => {
        this.countries = countries;
        this.spinnerC.hideSpinner();
      }
    );
  }

}
