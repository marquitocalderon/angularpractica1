import { Component, OnInit } from '@angular/core';
import {  Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SeguridadComponent } from './seguridad/seguridad.component';

@Component({
  selector: 'componente-layoutadmin',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SeguridadComponent, RouterLinkActive],
  templateUrl: './layoutadmin.component.html',
  styleUrl: './layoutadmin.component.css'
})
export class LayoutadminComponent implements OnInit   {

  sideBardOpen: boolean = false;

  clickMenu(){
    this.sideBardOpen = !this.sideBardOpen;
  }


  constructor(private router: Router) { }

  ruta: string = ""

  ngOnInit() {
    const nombreRuta = this.router.url;
    console.log(nombreRuta);
    this.ruta = nombreRuta
}




}
