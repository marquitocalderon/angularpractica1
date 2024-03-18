import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiservicioService } from '../../../api/apiservicio.service';

@Component({
  selector: 'componente-word',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './word.component.html',
  styleUrl: './word.component.css'
})
export class WordComponent {


  constructor(private servicioWord: ApiservicioService) { }

  formulario = new FormGroup({
    nombre: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(16)]),
    edad: new FormControl(""),
    direccion: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
  })

  loading: boolean = false
  atrapar: string = ""
  nombrepuroLetra: string = ""

  nombreChange(event: any) {
    // Obtener el valor ingresado en el campo de nombre
    let inputValue: string = event.target.value;

    // Filtrar el valor para permitir solo letras
    inputValue = inputValue.replace(/[^a-zA-Z\s]/g, '');

    console.log(inputValue)
  }

  errorEnSolicitud = ""

  sendForm(e: any) {
    this.loading = true
    const formulario = this.formulario.getRawValue();
    const url = import.meta.env.NG_APP_WORD

    this.servicioWord.postWord(url, formulario).subscribe({
      next: (respuesta: any) => {
       console.log(respuesta)

       if (respuesta) {
        // Convierte el Blob a un documento Word y descárgalo
        const blob = new Blob([respuesta], { type: "application/msword" }); // Ajusta el tipo MIME según sea necesario

        // Crea un enlace de descarga
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `hola.docx`; // Cambia el nombre del archivo según tus necesidades

        // Simula un clic en el enlace para iniciar la descarga
        link.click();

        // Libera el objeto URL creado
        URL.revokeObjectURL(link.href); // Cambia el nombre del archivo según tus necesidades
      }
      },
      error: (atrapar) => {

        if (atrapar.error.statusCode === 400) {
          this.errorEnSolicitud = atrapar.error.message[0]
          this.loading = false
        }
        else if (atrapar.error.statusCode === 401) {
          this.errorEnSolicitud = atrapar.error.message
          this.loading = false
        }
        else {
          this.errorEnSolicitud = "Error en el servidor"
          this.loading = false
        }
      }
    })

  }


}
