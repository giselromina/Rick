import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { DataTableCharacter } from '../models/dataTableCharacter';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-shared-list',
  templateUrl: './shared-list.component.html',
  styleUrls: ['./shared-list.component.css']
})
export class SharedListComponent implements OnInit, AfterViewInit {
  //  si accedemos mediante la referencia del elemento tenemos que acceder a sus propiedades y metodos
  // mediante el .nativeElement de HTML
  @ViewChild('listFilterRef', { static: false }) listFilterRef: ElementRef;

  // si accedemos al input mediante el ngModel, estamo accediendo a la estructura NgMOdel que
  // creo angular al tener una referencia y podemos acceder a sus estados, si fue mnodufucado o si es valido
  // NO tenemos acceso al elemento nativo

  @ViewChild( NgModel, { static: false }) filterByElement: NgModel;

  @ViewChildren('listFilterRef,listFilterRef2') listElementsRef: QueryList<ElementRef>;
  @ViewChildren(NgModel) allElementRefs: NgModel;


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
  listfilterOS: string;


  ngOnInit() {
    this.displayedColumns = Object.keys(this.dataSource[0]);
    this.filteredCharacters = this.dataSource;
  }

  ngAfterViewInit(): void {

    // muestra todos los elementos que se encuentran como referencia
    // se pueden observar por consola los diferentes llamados
    // me suscribo al evento del ngModel del elemento al que se hace referencia
    // ern este caso debo asegurarme que haya un doble binding y le paso como parametro la variable
    // que tiene [(variable)]
// si funciona, aunque no filter, esto se debe a que toma el primer [(ngModel)] que encuentra y filtra port alli
// si del html borramos el primer [(ngModel)] vemos que filtra

    this.filterByElement.valueChanges.subscribe(() => {
      this.applyFilter(this.listfilterOS);
    });
    console.log(this.filterByElement);
    console.log(this.listElementsRef);
    console.log(this.allElementRefs);

  }

  filteredBy(event?: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.applyFilter(filterValue);
  }

  applyFilter(key?: string | null): void {
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
