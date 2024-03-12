import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemonList: any[] = [];
  filteredPokemonList: any[] = []; // Declaración de la propiedad filteredPokemonList
  selectedType: string = 'all';
  searchTerm: string = '';
  typeCounts: { [type: string]: number } = {}; // Declaración de la propiedad typeCounts


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=1000')
      .subscribe(response => {
        this.pokemonList = response.results;
        this.typeCounts['all'] = this.pokemonList.length; // Actualiza el recuento para 'all'
      });
  }

  filterPokemonByType(): void {
    if (this.selectedType === 'all') {
      this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=1000')
        .subscribe(response => {
          this.pokemonList = response.results;
          this.typeCounts['all'] = this.pokemonList.length; // Actualiza el recuento para 'all'
        });
    } else {
      this.http.get<any>(`https://pokeapi.co/api/v2/type/${this.selectedType}`)
        .subscribe(response => {
          this.pokemonList = response.pokemon.map((pokemon: any) => pokemon.pokemon);
          this.typeCounts = {}; // Reinicia los contadores
          this.typeCounts[this.selectedType] = this.pokemonList.length; // Actualiza el recuento para el tipo seleccionado
        });
    }
  }
  

  getPokemonId(url: string): number {
    const id = url.split('/').filter(segment => segment.trim() !== '').pop();
    return parseInt(id || '0');
  }

  filterPokemonByName(): void {
    // Filtrar la lista de Pokémon por nombre
    this.filteredPokemonList = this.pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  getPokemonType(url: string): Observable<string> {
    return this.http.get<any>(url).pipe(
      map(response => {
        const types = response.types.map((type: any) => type.type.name);
        return types.join(', ');
      })
    );
  }


}  
