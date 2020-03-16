import { Component, OnInit, Input } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { DataTableCharacter } from '../models/dataTableCharacter';
@Component({
  selector: 'app-shared-list',
  templateUrl: './shared-list.component.html',
  styleUrls: ['./shared-list.component.css']
})
export class SharedListComponent implements OnInit {
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

  applyFilter(event?: Event): void {
    if (event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.filteredCharacters = this.dataSource.filter(
        (character: DataTableCharacter) => character.name.toLocaleLowerCase().indexOf(filterValue.toLocaleLowerCase()) !== -1);
    } else {
      this.filteredCharacters = this.dataSource;
    }
  }
  toggleImag(btn) {
    console.log(btn);
  }
}
