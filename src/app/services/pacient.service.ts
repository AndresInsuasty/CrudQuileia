import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PacientModel } from '../models/pacient.models';

@Injectable({
  providedIn: 'root'
})
export class PacientService {

  apiurl='http://localhost:9090/Pacientes';
  constructor(private _http: HttpClient) { }

  getPacients() {
    return this._http.get<PacientModel[]>(this.apiurl)
  }

}
