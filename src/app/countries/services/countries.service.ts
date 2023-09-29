import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, catchError, delay, map, of, pipe, tap } from 'rxjs';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/catch-store.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  public cacheStorage: CacheStore = {
    byCapital: {term: '', countries:[]},
    byCountries: {term: '', countries:[]},
    byRegion: {region: '', countries:[]}
  }



  constructor(private http: HttpClient) {

    console.log('COuntriesService init')
  }

  private getCountryRequest( url : string): Observable<Country[]>{
    return this.http.get<Country[]>( url )
    .pipe(
      catchError( () => of ([]) ),
    // delay( 2000),
    );

  }



  searchCountryByAlphaCode(code:string): Observable<Country | null>{
    const url = `${this.apiUrl}/alpha/${code}`
    return this.http.get<Country[]>( url )
    .pipe(
      map( countries => countries.length > 0 ? countries[0]: null ),
      catchError(() => of (null))
    )
  }


  searchByCapital(term:string): Observable<Country[]>{

    const url = `${this.apiUrl}/capital/${term}`
    return this.getCountryRequest(url)
    .pipe(
      tap (  countries => this.cacheStorage.byCapital = { term: term, countries: countries})
    );
  }

  searchCountry(term: string):Observable<Country[]>{

    const url = `${this.apiUrl}/name/${term}`
    return this.getCountryRequest(url);

  };


  searchRegion(region: string):Observable<Country[]>{

    const url = `${this.apiUrl}/region/${region}`
    return this.getCountryRequest(url);

  };

}
