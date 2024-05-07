import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/modal.interface';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  urlModalCountries:string = environment.apiModal;

  constructor(private http: HttpClient) { }

   getModalCountries(ccn3:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.urlModalCountries}${ccn3}`);
   }

  }
