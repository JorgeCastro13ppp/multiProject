import { Component, OnInit } from '@angular/core';
import { GeoService } from './services/geo.service';
import { APIm } from './interfaces/municipalities.interface';
import { APIc } from './interfaces/communities.interface';
import { APIp } from './interfaces/provinces.interface';

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


  constructor(private geoService: GeoService) { }

  ngOnInit(): void {

     this.geoService.getCommunities().subscribe(
       community =>{
         this.apiCommunities = community;
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
    this.geoService.getProvinces(acomCode).subscribe(
      province => {
        this.apiProvinces = province;
      }
    )
  }

  onSelectProvince(provCode:string){
    console.log(provCode);
    this.geoService.getMunicipalities(provCode).subscribe(
      municipality => {
        this.apiMunicipalities = municipality;
      }
    )
  }


}
