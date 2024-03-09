import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rickmorty',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './rickmorty.component.html',
  styleUrls: ['./rickmorty.component.css']
})
export class RickmortyComponent implements OnInit {
  characters: any[] = [];
  filteredCharacters: any[] = [];
  selectedStatus: string = 'all';
  searchTerm: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('https://rickandmortyapi.com/api/character/')
      .subscribe(response => {
        this.characters = response.results;
        this.filteredCharacters = this.characters;
      });
  }

  filterCharactersByStatus(): void {
    if (this.selectedStatus === 'all') {
      this.filteredCharacters = this.characters;
    } else {
      this.http.get<any>(`https://rickandmortyapi.com/api/character/?status=${this.selectedStatus}`)
        .subscribe(response => {
          this.filteredCharacters = response.results;
        });
    }
  }

  filterCharactersByName(): void {
    this.filteredCharacters = this.characters.filter(character =>
      character.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
