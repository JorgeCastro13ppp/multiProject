import { Component, ElementRef, OnInit } from '@angular/core';
import { GeoService } from '../../services/geo.service';
import { APIm } from '../../../shared/interfaces/municipalities.interface';
import { APIc } from '../../../shared/interfaces/communities.interface';
import { APIp } from '../../../shared/interfaces/provinces.interface';
import { SpinnerService } from '../../../utils/services/spinner.service';
import { MunicipalityService } from '../../services/municipality.service';




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


  constructor(private geoService: GeoService,public spinner:SpinnerService, private municipalityService:MunicipalityService,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.spinner.showSpinner();
     this.geoService.getCommunities().subscribe(
       community =>{
         this.apiCommunities = community;
         this.spinner.hideSpinner();
       }
     );
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
    if (acomCode === '20') {
      this.openToastCommunity();
    }
  }

  openToastCommunity() {
    const toast = this.elementRef.nativeElement.querySelector('#myToastCommunity');
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show'); // Quita la clase 'show' para ocultar el toast
    }, 10000); // Oculta el toast después de 10 segundos (10000 milisegundos)
  }
  openToastProvince() {
    const toast = this.elementRef.nativeElement.querySelector('#myToastProv');
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show'); // Quita la clase 'show' para ocultar el toast
    }, 10000); // Oculta el toast después de 10 segundos (10000 milisegundos)
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
    if (provCode === '54') {
      this.openToastProvince();
    }
  }

  onSelectMunicipality(munCode:string){
    this.municipalityService.navigateToWeather(munCode);
    console.log(munCode);
  }


}
