import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { API } from '../../interfaces/flags.interface';
import { ModalService } from '../../services/modal.service';
import { Country } from '../../interfaces/modal.interface';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.scss']
})
export class FlagsComponent implements OnInit {

  apiFlags?:API[];
  apiCountries?:Country[];

  constructor(private countriesService: CountriesService, private modalService:ModalService) {
   }

  ngOnInit(): void {
    this.countriesService.getFlagsCountries().subscribe(
      api => {
        this.apiFlags = api;
      }
    );

  }

  openModal(ccn3:string):void {
    console.log('Click en la bandera!', ccn3);

    this.modalService.getModalCountries(ccn3).subscribe(country=>{
      this.apiCountries = country;
      console.log(country);

    })
  }

}
