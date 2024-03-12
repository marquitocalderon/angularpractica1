import { Component } from '@angular/core';
import { LineaComponent } from './charts/linea/linea.component';

@Component({
  selector: 'componente-admin',
  standalone: true,
  imports: [LineaComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
