import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { API } from '../interfaces/flags.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { Country } from '../interfaces/modal.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = environment.apiUrl;
  private data: API[] = [];
  private countryDetails: { [key: string]: Country } = {};

  constructor(private http: HttpClient) {}

  loadData(): Observable<API[]> {
    if (this.data.length) {
      return of(this.data);
    }
    return this.http.get<API[]>(this.apiUrl).pipe(
      tap(data => this.data = data),
      catchError(this.handleError<API[]>('loadData', []))
    );
  }

  getCountryDetails(cca2: string): Observable<Country> {
    if (this.countryDetails[cca2]) {
      return of(this.countryDetails[cca2]);
    }
    return this.http.get<Country>(`${this.apiUrl}/${cca2}`).pipe(
      tap(data => this.countryDetails[cca2] = data),
      catchError(this.handleError<Country>('getCountryDetails'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
