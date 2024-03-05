import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  visitCount: number = 0;
  appName: string = 'MiApp';

  constructor() { }

  ngOnInit(): void {
    // No incrementamos el contador al inicializar el componente
  }

  incrementVisitCount() {
    // Incrementamos el contador de visitas al hacer clic en el botón
    this.visitCount += 1;
  }

  getWelcomeMessage() {
    return `¡Bienvenido a ${this.appName}! Aquí aprenderás sobre Angular, Bootstrap y FontAwesome de manera fácil y divertida.`;
  }

}
