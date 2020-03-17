import { Component, OnInit, Input } from '@angular/core';
import {DataCard} from '../models/dataCard';
@Component({
  selector: 'app-show-card-inf',
  templateUrl: './show-card-inf.component.html',
  styleUrls: ['./show-card-inf.component.css']
})
export class ShowCardInfComponent implements OnInit {
  data;
  constructor() { }
// aca se recibe la informacion desde el padre mediante el metodo Input(), porlo que en el
// padre debe tener la propiedada en el HTML y declarada como Input() en el hijo


// de lo contrario puedo acceder a las variables y metodos que tenga aca declarado sin declarar nada
// si en el padre hago viewChild del componente entero

    @Input() dataForCard: DataCard;

  ngOnInit() {
  }

}
