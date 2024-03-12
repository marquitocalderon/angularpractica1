import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'componente-linea',
  standalone: true,
  imports: [],
  templateUrl: './linea.component.html',
  styleUrl: './linea.component.css'
})
export class LineaComponent {
  public chart: any;

  ngOnInit(): void {
    const data = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      datasets: [{
        label: 'Datos de ejemplo',
        data: [10, 20, 30, 25, 35, 45, 40, 50, 55, 60, 65, 70], // Datos para la línea
        borderColor: 'rgba(75, 192, 192, 1)', // Color de la línea
        borderWidth: 3 // Ancho de la línea
      }]
    };

    const options = {
      maintainAspectRatio: false,
      responsive: true,
      aspectRatio: 1.21 // Ajusta este valor para cambiar la altura del gráfico
    };

    this.chart = new Chart('chart', {
      type: 'line',
      data: data,
      options: options
    });
  }
}
