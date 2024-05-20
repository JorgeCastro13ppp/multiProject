import { Component, OnInit, SecurityContext } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { API } from '../../interfaces/flags.interface';
import { ModalService } from '../../services/modal.service';
import { Country } from '../../interfaces/modal.interface';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
// import { Sanitizer } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.scss']
})
export class FlagsComponent implements OnInit {

  // sanitizedUrl?:any;
  apiFlags?:API[];
  apiCountries?:Country[];

  constructor(private countriesService: CountriesService, private modalService:ModalService, public spinner:SpinnerService, public spinnerModal:SpinnerService /*private sanitizer: DomSanitizer*/) {
   }

  ngOnInit(): void {
    this.spinner.showSpinner();
    this.countriesService.getFlagsCountries().subscribe(
      api => {
        this.apiFlags = api;
        this.spinner.hideSpinner();
      }
    );

  }

  getInfoModal(cca2:string):void {
    this.spinnerModal.showSpinner();
    console.log('Click en la bandera!', cca2);
    this.modalService.getModalCountries(cca2).subscribe(country=>{
      this.apiCountries = country;
      this.spinnerModal.hideSpinner();
      console.log(country);
      // Sanitizar la URL de Google Maps
      // this.apiCountries.forEach(country => {
      //   if (country.maps && country.maps.googleMaps) {
      //     this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(country.maps.googleMaps);
      //   }
      // });

    })

  }

}
