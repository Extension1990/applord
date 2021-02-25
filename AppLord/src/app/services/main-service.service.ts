import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  apiUrl = 'https://swapi.dev/api/';

  // HTTP HeadersOption
  headers = new HttpHeaders ({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': '*',
  });

  constructor(private http: HttpClient) { }

  getFilms() {
    return this.http.get<any>(this.apiUrl + 'films/');
  }
  getFilmsById(id: number) {
    return this.http.get<any>(this.apiUrl + 'films/' + id + '/');
  }
  getCharacters() {
    return this.http.get<any>(this.apiUrl + 'people/');
  }
  getStarships() {
    return this.http.get<any>(this.apiUrl + 'starships/');
  }
}
