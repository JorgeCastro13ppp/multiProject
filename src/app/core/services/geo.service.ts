import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environmentGeo } from '../../shared/environments/environment.geo';
import { Observable } from 'rxjs';
import { APIm } from '../../shared/interfaces/municipalities.interface';
import { APIc } from '../../shared/interfaces/communities.interface';
import { APIp } from '../../shared/interfaces/provinces.interface';

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  urlCommunities:string = environmentGeo.apiCommunity;
  urlProvinces:string = environmentGeo.apiProvinces;
  urlMunicipalities:string = environmentGeo.apiMuni;

  constructor(private http:HttpClient) { }


  getMunicipalities(provCode:string):Observable<APIm>{
    return this.http.get<APIm>(this.urlMunicipalities+'refine=prov_code%3A"'+provCode+'"&limit=100');
  }

  getProvinces(acomCode:string):Observable<APIp>{
    return this.http.get<APIp>(this.urlProvinces+'where=acom_code%3D"'+acomCode+'"');
  }

  getCommunities():Observable<APIc>{
    return this.http.get<APIc>(this.urlCommunities);
  }


}
