import { Component, OnInit } from '@angular/core';
import { GeoService } from './services/geo.service';
import { APIm } from './interfaces/municipalities.interface';
import { APIc } from './interfaces/communities.interface';
import { APIp } from './interfaces/provinces.interface';
import { SpinnerService } from '../shared/services/spinner.service';
import { MunicipalityService } from './services/municipality.service';
import { MunicipalityWeatherService } from '../shared/services/municipality-weather.service';
import { AemetService } from '../weather-aemet/services/aemet.service';


@Component({
  selector: 'app-geo-municipalities',
  templateUrl: './geo-municipalities.component.html',
  styleUrls: ['./geo-municipalities.component.scss'],
})



export class GeoMunicipalitiesComponent implements OnInit {

  selectedCommunity?:string;
  selectedProvince?:string;

  isLoadingProvinces?:boolean;
  isLoadingMunicipalities?:boolean;

  apiCommunities?:APIc;
  apiProvinces?:APIp;
  apiMunicipalities?:APIm;


  constructor(private geoService: GeoService,public spinner:SpinnerService, private municipalityService:MunicipalityService,private sharedService:MunicipalityWeatherService,
    private aemet:AemetService
  ) { }

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
    this.isLoadingProvinces = true;
    this.geoService.getProvinces(acomCode).subscribe(
      province => {
        this.apiProvinces = province;
        this.isLoadingProvinces = false;
      }
    )
  }

  onSelectProvince(provCode:string){
    console.log(provCode);
    this.isLoadingMunicipalities = true;
    this.geoService.getMunicipalities(provCode).subscribe(
      municipality => {
        this.apiMunicipalities = municipality;
        console.log(municipality);
        this.isLoadingMunicipalities=false;
      }
    )
  }

  onSelectMunicipality(munCode:string){
    this.municipalityService.navigateToWeather(munCode);
    console.log(munCode);
  }


}
