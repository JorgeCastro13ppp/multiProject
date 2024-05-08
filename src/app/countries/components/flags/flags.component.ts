import { Component, OnInit, SecurityContext } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { API } from '../../interfaces/flags.interface';
import { ModalService } from '../../services/modal.service';
import { Country } from '../../interfaces/modal.interface';
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

  constructor(private countriesService: CountriesService, private modalService:ModalService /*private sanitizer: DomSanitizer*/) {
   }

  ngOnInit(): void {
    this.countriesService.getFlagsCountries().subscribe(
      api => {
        this.apiFlags = api;
      }
    );

  }

  getInfoModal(cca2:string):void {
    console.log('Click en la bandera!', cca2);

    this.modalService.getModalCountries(cca2).subscribe(country=>{
      this.apiCountries = country;
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
