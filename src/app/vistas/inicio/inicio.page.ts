import { Component, OnInit } from '@angular/core';

interface Componente {
  icono: string,
  nombre: string,
  direccion: string,
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icono: "bandage-outline",
      nombre: "Nosotros",
      direccion: "/nosotros",      
    },
    {
      icono: "football-outline",
      nombre: "Contacto",
      direccion: "/contacto",
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
