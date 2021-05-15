import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage implements OnInit {
  public nombre_boton1;
  constructor() { }

  ngOnInit() {
    this.nombre_boton1 = "Contacto"
  }

}
