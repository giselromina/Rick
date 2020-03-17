import { Injectable } from '@angular/core';
import {Character} from './character';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CharacterService {
// con estas dos propiedades
// la funcion que cumple el servicio es  para guardar
// datos de un modulo que deseamos guardar se gestiona con getter/setter
matrialTableShow: boolean;
cardInfo: {};

private rickUrl = 'https://rickandmortyapi.com/api';
  constructor(private http: HttpClient) {
   }
 public getCharactres(): Observable <any> {
   return this.http.get(`${this.rickUrl }/character`);
 }
}
