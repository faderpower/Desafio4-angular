import { Component,OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { NgFor,NgIf } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-descripcion',
  standalone: true,
  imports: [NgFor,MatCardModule,NgIf,MatButtonModule, MatTooltipModule, MatIconModule],
  templateUrl: './descripcion.component.html',
  styleUrl: './descripcion.component.css'
})
export class DescripcionComponent implements OnInit{
  ver=true
  compra: any;
  products = [
    {
        id: 1,
        nombre: 'BUJIAS PLATINUM CHEROKEE LIBERTY KK COMPASS GRAN CHEROKEE 4.7 MONTERO DAKAR SPORT LIMITED MAZDA B2600 MAZDA BT50 HONDA ACCORD HONDA CIVIC CRV FIT',
        precio: 79.99,
        imagenUrl: 'https://repuestoslaurbina.com/cdn/shop/files/ZFR6FGP-removebg-preview_360x.png?v=1712330245',
        tipoEnvio: 'Envio gratis'
    },
    {
        id: 2,
        nombre: 'ROLINERA CIGUEÑAL VITARA GRAND VITARA',
        precio: 129.99,
        imagenUrl: 'https://repuestoslaurbina.com/cdn/shop/files/6200-2RS_360x.jpg?v=1698763733',
        tipoEnvio: 'Envio gratis'
    },
    {
        id: 3,
        nombre: 'CORREA MICRO LUV DMAX 3.5 2004-2008',
        precio: 49.99,
        imagenUrl: 'https://repuestoslaurbina.com/cdn/shop/files/D_838103-MLV75371151220_042024-F_1_360x.jpg?v=1712333052',
        tipoEnvio: 'Envio gratis'
    },
    {
      id: 4,
      nombre: 'Modem/Router Tplink Gpon XC220-G3V para Fibra Óptica AC1200 Ggigabyte Voip de hasta 1,2 Gbps, 300 Mbps 2,4 GHz, 867 Mbps 5 GHz 2 antenas',
      precio: 69.99,
      imagenUrl: 'https://sigmatiendas.com/cdn/shop/files/Router-Tplink-Gpon-XC220-G3V-AC1200-Ggigabyte-diagonal.jpg?v=1711003503&width=300',
      tipoEnvio: 'Envio gratis'
  },
  {
      id: 5,
      nombre: 'Laptop Notebook de 14.1" Dreambook Nexxus',
      precio: 109.99,
      imagenUrl: 'https://sigmatiendas.com/cdn/shop/files/Laptop-Notebook-de-14.1-nexxus-front.jpg?v=1712327544&width=300',
      tipoEnvio: 'Envio gratis'
  },
  {
      id: 6,
      nombre: 'Audifonos Thonet & Vander Bluetooth Vr100 Neckband',
      precio: 89.99,
      imagenUrl: 'https://sigmatiendas.com/cdn/shop/products/Untitleddesign-2022-10-25T135643.634.webp?v=1673033225&width=300',
      tipoEnvio: 'Envio gratis'
  },
  {
      id: 7,
      nombre: 'Juego de vajilla de porcelana 16 piezas, 4 personas',
      precio: 59.99,
      imagenUrl: 'https://spinetohogar.com/cdn/shop/products/7450112760669.jpg?crop=center&height=280&v=1709100648&width=280',
      tipoEnvio: 'Envio gratis'
  },
  {
      id: 8,
      nombre: 'inflable flotador jetSki 116x76',
      precio: 149.99,
      imagenUrl: 'https://spinetohogar.com/cdn/shop/products/6941057457543-1.jpg?crop=center&height=280&v=1709097547&width=280',
      tipoEnvio: 'Envio gratis'
  },
  {
      id: 9,
      nombre: 'Juego de cava 3 piezas',
      precio: 84.99,
      imagenUrl: 'https://spinetohogar.com/cdn/shop/products/8904230740069.jpg?crop=center&height=280&v=1709097513&width=280',
      tipoEnvio: 'Envio gratis'
  },
  {
      id: 10,
      nombre: 'Olla con tapa de 20cm',
      precio: 39.99,
      imagenUrl: 'https://spinetohogar.com/cdn/shop/products/7891112266049.jpg?crop=center&height=280&v=1709097681&width=280',
      tipoEnvio: 'Envio gratis'
  }
 ];
 
  imageIndex = 0;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getDescrip();
  }

  getDescrip(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id !== null) {
      const idNumber: number = parseInt(id, 10);
      if (!isNaN(idNumber) && idNumber >= 0 && idNumber < this.products.length) {
        this.compra = this.products.find(product => product.id === idNumber); 
      }
    }
  }
}


