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

  imageUrl: string | ArrayBuffer | null = null;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === 'string') {
          this.imageUrl = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    }
  }
}
