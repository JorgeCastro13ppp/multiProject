import { Component, OnInit } from '@angular/core';
import { GeoService } from './services/geo.service';
import { APIm } from './interfaces/municipalities.interface';
import { APIc } from './interfaces/communities.interface';
import { APIp } from './interfaces/provinces.interface';
import { SpinnerService } from '../shared/services/spinner.service';

@Component({
  selector: 'app-geo-municipalities',
  templateUrl: './geo-municipalities.component.html',
  styleUrls: ['./geo-municipalities.component.scss'],
})



export class GeoMunicipalitiesComponent implements OnInit {

  selectedCommunity?:string;
  selectedProvince?:string;

  apiCommunities?:APIc;
  apiProvinces?:APIp;
  apiMunicipalities?:APIm;


  constructor(private geoService: GeoService,public spinner:SpinnerService) { }

  ngOnInit(): void {
    this.spinner.showSpinner();
     this.geoService.getCommunities().subscribe(
       community =>{
         this.apiCommunities = community;
         this.spinner.hideSpinner();
       }
     );

    //  this.municipalitiesService.getMunicipalities().subscribe(
    //    muni =>{
    //      this.apiMunicipalities = muni;
    //   }
    // );
  }

  onSelectCommunity(acomCode:string) {
    console.log(acomCode);
    this.spinner.showSpinner();
    this.geoService.getProvinces(acomCode).subscribe(
      province => {
        this.apiProvinces = province;
        this.spinner.hideSpinner();
      }
    )
  }

  onSelectProvince(provCode:string){
    console.log(provCode);
    this.spinner.showSpinner();
    this.geoService.getMunicipalities(provCode).subscribe(
      municipality => {
        this.apiMunicipalities = municipality;
        this.spinner.hideSpinner();
      }
    )
  }


}
