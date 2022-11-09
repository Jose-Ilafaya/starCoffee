import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  items:any[];
  copyright:string=''
  constructor() {
    this.copyright='© 2022 Star Coffee. Todos los derechos reservados'
    this.items=[{
      titulo:'Inicio'
    },
    {
      titulo:'Contacto'
    },
    {
      titulo:'Pricing'
    },
    {
      titulo:'FAQs'
    },
    {
      titulo:'About'
    }

  ]
   }

  ngOnInit(): void {
  }

}
