import { Component, OnInit, Input } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { DataTableCharacter } from '../models/dataTableCharacter';
@Component({
  selector: 'app-shared-list',
  templateUrl: './shared-list.component.html',
  styleUrls: ['./shared-list.component.css']
})
export class SharedListComponent implements OnInit {


 private _listfilterGS: string;

  get listfilterGS() {
    return this._listfilterGS;
  }

  set listfilterGS(filter: string) {
    this._listfilterGS = filter;
    this.applyFilter(this.listfilterGS);
  }

  constructor() { }
  @BlockUI() blockUI: NgBlockUI;
  @Input() dataSource: DataTableCharacter[];
  displayedColumns: string[];
  listfilter: string;
  filteredCharacters: DataTableCharacter[];

  ngOnInit() {
    this.displayedColumns = Object.keys(this.dataSource[0]);
    this.filteredCharacters = this.dataSource;
  }

filteredBy(event?: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.applyFilter(filterValue);
}

  applyFilter(key?: string|null): void {
    if (key) {
      this.filteredCharacters = this.dataSource.filter(
        (character: DataTableCharacter) => character.name.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !== -1);
    } else {
      this.filteredCharacters = this.dataSource;
    }
  }

  toggleImag(btn) {
    console.log(btn);
  }
}
