import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchTerm: string = "";

  constructor(private router: Router) {}

  /* searchPage() {
    if (this.searchTerm && this.searchTerm.trim() !== '') {
      // Redirige a la página correspondiente utilizando el término de búsqueda
      this.router.navigate(['/search'], { queryParams: { q: this.searchTerm } });
    }
  } */

}


