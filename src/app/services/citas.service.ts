import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CitasModel } from '../models/citas.model';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  apiurlCitas = 'http://127.0.0.1:9090/Citas';
  constructor(private _http: HttpClient) { }

  getCitas() {
    return this._http.get<CitasModel[]>(this.apiurlCitas)
  }

  postCitas(model: any) {
    return this._http.post(this.apiurlCitas, model)
  }

  deleteCitas(id) {
    return this._http.delete(this.apiurlCitas.concat("/", id))
  }
  putCitas(model: any) {
    return this._http.put(this.apiurlCitas, model)
  }

}
