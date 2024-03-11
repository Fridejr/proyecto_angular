import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemonList(limit: number = 1000): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pokemon?limit=${limit}`);
  }

  getPokemonType(type: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/type/${type}`);
  }
}
