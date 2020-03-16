import { Injectable } from '@angular/core';
import {Character} from './character';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CharacterService {
private rickUrl = 'https://rickandmortyapi.com/api';
  constructor(private http: HttpClient) {

   }
 public getCharactres():Observable<any> {
   debugger
   return this.http.get(`${this.rickUrl }/character`);
 }
}
