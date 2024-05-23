import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { API } from '../../interfaces/flags.interface';
import { ModalService } from '../../services/modal.service';
import { Country } from '../../interfaces/modal.interface';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { DataService } from '../../services/data.service';
import { Aed, All } from '../../interfaces/all.interface';
// import { Sanitizer } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.scss']
})
export class FlagsComponent implements OnInit {

  @Input() countries: All[] = [];
  selectedCountry?: All;

  constructor(
    private countriesService: CountriesService,
    public spinner: SpinnerService
  ) { }

  ngOnInit(): void { }

  getInfoModal(cca2: string): void {

    this.selectedCountry = this.countriesService.getCountryByCode(cca2);

  }
  getCurrencies(country: All): { key: string, value: Aed }[] | undefined {
    return country.currencies ? Object.entries(country.currencies).map(([key, value]) => ({ key, value })) : undefined;
  }
}
