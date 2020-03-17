import { Component, OnInit, ViewChild, ElementRef, AfterContentInit, AfterViewInit } from '@angular/core';

import { Character } from '../character';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { CharacterService } from '../character.service';
import { ShowCardInfComponent } from 'src/app/shared/show-card-inf/show-card-inf.component';
import { DataCard } from '../../shared/models/dataCard';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, AfterViewInit {
  data: Character[];
  dataSource;
  materialTable;
  nameTable;
  showcard: boolean;
  dataToCard;
  constructor(private _characterService: CharacterService,
    private route: Router) { }

  @BlockUI() blockUI: NgBlockUI;
  @ViewChild('materialTable', { static: false }) material: ElementRef;
  @ViewChild('primeTable', { static: false }) prime: ElementRef;
  @ViewChild(ShowCardInfComponent, { static: false }) cardIfno: ShowCardInfComponent;
  primeTable: boolean;

  // retorna el valor de lo seleccioanado una vez que se seteo el valor
  get muestroMsjSeleccion(): boolean {

    return this._characterService.matrialTableShow;
  }
  // establecemos el valor del parametro en el servicio una vez que se selecciono la opcion

  set muestroMsjSeleccion(show: boolean) {
    this._characterService.matrialTableShow = show;
  }

  ngOnInit() {

    this.getDataFromService();
  }

  getDataFromService() {
    this.blockUI.start('loading...');
    this._characterService.getCharactres().subscribe(
      res => {
        this.data = res.results;
        this.getColumNames();
        this.getDataTable();
        this.blockUI.stop();
      }

    );
  }
  getColumNames(): any {
    // this.columnsToDisplay = ['name', 'origin'];

  }
  goBack() {
    this.route.navigate(['home']);
  }
  getDataTable() {
    this.dataSource = this.data.map(e => {
      return {
        id: e.id,
        name: e.name,
        status: e.status,
        specie: e.species,
        origin: e.origin.name,
        location: e.location.name,
      };
    });
    this.blockUI.stop();
  }
  tableSelected(button) {
    switch (button.toElement.name) {
      case 'btnMAterial': {
        this.materialTable = true;
        this.primeTable = false;
        this.muestroMsjSeleccion = true;
        this.showcard = false;
        this.nameTable = 'Tabla Material';
        break;
      }
      case 'btnPrime': {
        this.materialTable = false;
        this.primeTable = true;
        this.showcard = false;
        break;
      }
      case 'btnCard': {
        this.dataToCard = this.createCardInfo();
        this.materialTable = false;
        this.primeTable = false;
        this.showcard = true;
        break;
      }
    }
  }

  createCardInfo() {

    // almaceno en el servicio datos que me sirven o estados para compartir y que otro modulo los necesite
    const InfoToShareService = {
      name: 'Gisel Ragusa Diaz',
      birth: '21/04/1988',
      adreess: 'Calle Malechor Bandido Tennese',
      location: 'Mars',
      edad: 31,
      tipeBlood: 'RH+',
      donetaOrgans: true,
      rick: true
    };
    this._characterService.cardInfo = InfoToShareService;
    console.log(this.cardIfno);
    return InfoToShareService;
  }
  ngAfterViewInit(): void {
    // desde este viewchild tiene acceso a todo el componente hijo y le pasa los datos por medio del type
    // sin tener que setear nada desde HTML
    // @ViewChild(ShowCardInfComponent, { static: false }) cardIfno: ShowCardInfComponent;
    this.cardIfno.data = 'HI this is data for ViewChild';
  }

}
