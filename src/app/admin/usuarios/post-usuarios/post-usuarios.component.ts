import { Component } from '@angular/core';

@Component({
  selector: 'componente-post-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './post-usuarios.component.html',
  styleUrl: './post-usuarios.component.css'
})
export class PostUsuariosComponent {
  formData: any = {};
  estaOjito : boolean = false;

  clickOjo () : void {
    this.estaOjito = !this.estaOjito;
  }
  
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }


}
