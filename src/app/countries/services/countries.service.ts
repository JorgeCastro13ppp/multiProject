import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { API } from '../interfaces/flags.interface';
import { environment } from '../environments/environment';
import { All } from '../interfaces/all.interface';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl = 'https://restcountries.com/v3.1/all';
  private countries: All[] = [];

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<All[]> {
    if (this.countries.length) {
      return of(this.countries);
    }
    return this.http.get<All[]>(this.apiUrl).pipe(
      tap(data => this.countries = data),
      catchError(this.handleError<All[]>('getAllCountries', []))
    );
  }

  getCountryByCode(cca2: string): All | undefined {
    return this.countries.find(country => country.cca2 === cca2);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
