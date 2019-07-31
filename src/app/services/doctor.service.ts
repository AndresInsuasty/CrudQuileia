import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { DoctorModel } from '../models/doctor.models';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  
  apiurl='http://localhost:9090/Doctores';
  
  constructor(private _http: HttpClient) { }

  getDoctors(){
    return this._http.get<DoctorModel[]>(this.apiurl)

  }

}
