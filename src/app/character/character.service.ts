import { Injectable } from '@angular/core';
import {Character} from './character';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CharacterService {

matrialTableShow:boolean;
moreShow:string;

// funcion para guardar datos de un modulo que deseamos guardar se gestiona con getter/setter

public setSelectionOption( param1, param2) {
  const selectionOption1 = param1;
  const SelectionName1 = param2;


  console.log(selectionOption1);
  console.log(SelectionName1);

}

private rickUrl = 'https://rickandmortyapi.com/api';
  constructor(private http: HttpClient) {
   }
 public getCharactres(): Observable <any> {
   return this.http.get(`${this.rickUrl }/character`);
 }
}
