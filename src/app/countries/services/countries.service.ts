import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../interfaces/flags.interface';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

   urlFlagsCountries:string = environment.apiUrl;

  constructor(private http: HttpClient) { }


  getFlagsCountries():Observable<API[]>{
    return this.http.get<API[]>(this.urlFlagsCountries);
  }
}
