import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Variable para almacenar la búsqueda del usuario
  search: string = '';
  // Inyectamos el servicio Router en el constructor
  constructor(private router: Router) { }
  // Método para buscar y navegar a la página correspondiente
  buscar() {
    // Navegar a la ruta correspondiente basada en la búsqueda
    this.router.navigate([`/${this.search.toLowerCase()}`]);
  }

  

}


