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

  toasts = [
    {
      id: 'myToastCommunity',
      message: 'Puedes ver los municipios de esta comunidad, pero no hay información meteorológica disponible sobre ellos.'
    },
    {
      id: 'myToastProv',
      message: 'Puedes ver los municipios de esta provincia, pero no hay información meteorológica disponible sobre ellos.'
    },
    {
      id: 'myToastMun',
      message: 'No hay información meteorológica disponible sobre estos municipios.'
    }
  ];

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
    const toastC = this.elementRef.nativeElement.querySelector('#myToastCommunity');
    toastC.classList.add('show');
    setTimeout(() => {
      toastC.classList.remove('show'); // Quita la clase 'show' para ocultar el toast
    }, 7000); // Oculta el toast después de 10 segundos (10000 milisegundos)
  }
  openToastProvince() {
    const toastP = this.elementRef.nativeElement.querySelector('#myToastProv');
    toastP.classList.add('show');
    setTimeout(() => {
      toastP.classList.remove('show'); // Quita la clase 'show' para ocultar el toast
    }, 7000); // Oculta el toast después de 10 segundos (10000 milisegundos)
  }
  openToastMun() {
    const toastM = this.elementRef.nativeElement.querySelector('#myToastMun');
    toastM.classList.add('show');
    setTimeout(() => {
      toastM.classList.remove('show'); // Quita la clase 'show' para ocultar el toast
    }, 6000); // Oculta el toast después de 10 segundos (10000 milisegundos)
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
    switch(munCode){
      case '54001':
      this.openToastMun();
      break;
      case '54002':
      this.openToastMun();
      break;
      case '54003':
      this.openToastMun();
      break;
      case '54004':
      this.openToastMun();
      break;
      case '54005':
      this.openToastMun();
      break;
      default:
        this.municipalityService.navigateToWeather(munCode);
        console.log(munCode);
        break;
    }


  }


}
