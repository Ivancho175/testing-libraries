import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private rickAndMortyURL = 'https://rickandmortyapi.com/api/character';
  private weatherURL =
    'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly';

  constructor(private http: HttpClient) {}

  getAll(limit?: number, offset?: number) {
    return this.http.get(
      this.rickAndMortyURL + `?limit=${limit}&offset=${offset}`
    );
  }

  getCharacterById(id: number) {
    return this.http.get(this.rickAndMortyURL + `/${id}`);
  }

  getWeather(lat: number, lon: number) {
    const headers = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '9c49a61dddmsh0801fa26359668ap15c94djsn47c3a0085e75',
        'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
      }),
    };
    return this.http.get(this.weatherURL + `?lat=${lat}&lon=${lon}`, headers);
  }
}
