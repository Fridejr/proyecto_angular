import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adivinar-numero',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adivinar-numero.component.html',
  styleUrls: ['./adivinar-numero.component.css']
})
export class AdivinaElNumeroComponent {
  numeroAzar = Math.floor(Math.random() * 100 + 1);
  numeroIngresado!: number;
  mensaje!: string;
  intentos = 0;
  flechas!: string;

  chequearResultado() {
    if (isNaN(this.numeroIngresado) || this.numeroIngresado < 1 || this.numeroIngresado > 100) {
      this.mensaje = 'Por favor, ingresa un número entre 1 y 100';
    } else {
      if (this.numeroIngresado === this.numeroAzar) {
        this.mensaje = `¡ENHORABUENA, EL NÚMERO ERA ${this.numeroAzar}!`;
        //hacer desaparecer la flecha
        this.flechas = "";
      } else if (this.numeroIngresado < this.numeroAzar) {
        this.flechas = "<img src='assets/verde.png'>";
      } else {
        this.flechas = "<img src='assets/roja.png'>";
      }
      this.intentos++;
    }
  }
}
