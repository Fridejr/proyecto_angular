import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent {
  apiUrl = 'http://localhost:3000/clothes';
  clothes: any[] = [];

  constructor(private http: HttpClient) {
    this.getClothes();
  }

  getClothes(): void {
    const url = `${this.apiUrl}?page=0&perPage=200`;
    this.http.get<any>(url)
      .subscribe(
        response => {
          this.clothes = response.items;
        },
        error => {
          console.error('Error fetching clothes:', error);
        }
      );
  }

  addClothes(newClothes: any): void {
    this.http.post<any>(this.apiUrl, newClothes)
      .subscribe(
        response => {
          this.clothes.push(response);
        },
        error => {
          console.error('Error adding clothes:', error);
        }
      );
  }

  updateClothes(id: number, updatedClothes: any): void {
    const url = `${this.apiUrl}/${id}`;
    this.http.put<any>(url, updatedClothes)
      .subscribe(
        response => {
          const index = this.clothes.findIndex(c => c.id === id);
          if (index !== -1) {
            this.clothes[index] = response;
          }
        },
        error => {
          console.error('Error updating clothes:', error);
        }
      );
  }

  deleteClothes(id: number): void {
    const url = `${this.apiUrl}/${id}`;
    this.http.delete(url)
      .subscribe(
        () => {
          this.clothes = this.clothes.filter(c => c.id !== id);
        },
        error => {
          console.error('Error deleting clothes:', error);
        }
      );
  }
}
