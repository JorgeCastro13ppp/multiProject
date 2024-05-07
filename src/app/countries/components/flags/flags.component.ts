import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { API, Flags } from '../../interfaces/flags.interface';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.scss']
})
export class FlagsComponent implements OnInit {

  apiFlags?:API[];

  constructor(private countriesService: CountriesService, private modalService:ModalService) {
   }

  ngOnInit(): void {
    this.countriesService.getFlagsCountries().subscribe(
      api => {
        this.apiFlags = api;
      }
    );


  }

}
