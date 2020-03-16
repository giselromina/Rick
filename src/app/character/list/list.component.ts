import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Character } from '../character';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import{CharacterService} from '../character.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data: Character[];
  dataSource;


  constructor(private _characterService: CharacterService,
    private route: Router) { }

  @BlockUI() blockUI: NgBlockUI;
  @ViewChild('materialTable', { static: false }) material: ElementRef;
  @ViewChild('primeTable', { static: false }) prime: ElementRef;
  materialTable: boolean;
  primeTable: boolean;


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
    if (button.toElement.name === 'btnMAterial') {
      this.materialTable = true;
      this.primeTable = false;
    } else {
      this.materialTable = false;
      this.primeTable = true;
    }
  }

}
