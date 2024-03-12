import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'componente-layoutadmin',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layoutadmin.component.html',
  styleUrl: './layoutadmin.component.css'
})
export class LayoutadminComponent {

  sideBardOpen: boolean = false;

  clickMenu(){
    this.sideBardOpen = !this.sideBardOpen;
    console.log(this.sideBardOpen)
  }

}
