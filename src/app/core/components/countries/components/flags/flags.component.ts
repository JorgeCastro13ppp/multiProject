import { AfterViewInit, Component, Input, OnInit, SecurityContext } from '@angular/core';
import { CountriesService } from '../../../../services/countries.service';
import { SpinnerService } from 'src/app/utils/services/spinner.service';
import { Aed, All } from '../../../../../shared/interfaces/all.interface';
// import { DomSanitizer } from '@angular/platform-browser';

// import * as L from 'leaflet';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.scss']
})
export class FlagsComponent implements OnInit, AfterViewInit {

  @Input() countries: All[] = [];
  selectedCountry?: All;

  constructor(
    private countriesService: CountriesService,
    public spinner: SpinnerService
  ) { }
  ngAfterViewInit(): void {

  }


  ngOnInit(): void { }



  getInfoModal(cca2: string): void {

    this.selectedCountry = this.countriesService.getCountryByCode(cca2);

  }
  getCurrencies(country: All): { key: string, value: Aed }[] | undefined {
    return country.currencies ? Object.entries(country.currencies).map(([key, value]) => ({ key, value })) : undefined;
  }
}
