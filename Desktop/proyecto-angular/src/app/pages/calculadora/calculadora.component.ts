import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  cantidad1: string = '0';
  cantidad2: string = '0';
  agregar1: boolean = true;
  agregar2: boolean = false;
  simboloOperador: string = '+';

  agregarNumero(numero: number) {
    if (this.agregar1) {
      if (this.cantidad1 === '0') {
        this.cantidad1 = numero.toString();
      } else {
        this.cantidad1 += numero.toString();
      }
    }

    if (this.agregar2) {
      if (this.cantidad2 === '0') {
        this.cantidad2 = numero.toString();
      } else {
        this.cantidad2 += numero.toString();
      }
    }
  }

  setOperador(operador: string) {
    this.agregar1 = false;
    this.agregar2 = true;
    this.simboloOperador = operador;
  }

  calcular() {
    this.agregar2 = false;
    let valor1 = parseInt(this.cantidad1);
    let valor2 = parseInt(this.cantidad2);

    switch (this.simboloOperador) {
      case 'x':
        this.cantidad1 = (valor1 * valor2).toString();
        break;
      case '/':
        this.cantidad1 = (valor1 / valor2).toString();
        break;
      case '+':
        this.cantidad1 = (valor1 + valor2).toString();
        break;
      case '-':
        this.cantidad1 = (valor1 - valor2).toString();
        break;
      case '%':
        this.cantidad1 = ((valor2 * valor1) / 100).toString();
    }
    this.agregar1 = true;
    this.cantidad2 = '0';
  }

  reiniciar() {
    this.cantidad1 = '0';
    this.cantidad2 = '0';
    this.agregar1 = true;
    this.agregar2 = false;
    this.simboloOperador = '+';
  }

  borrar() {
    if (this.agregar1) {
      this.cantidad1 = this.cantidad1.slice(0, -1);
    }
  }
}
