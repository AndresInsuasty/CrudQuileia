import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DoctorModel } from '../models/doctor.models';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {


  apiurl = 'http://127.0.0.1:9090/Doctores';
  //apiurl='https://my-json-server.typicode.com/typicode/demo/posts';

  constructor(private _http: HttpClient) { }

  getDoctors() {
    return this._http.get<DoctorModel[]>(this.apiurl)

  }

  postDoctors(model: any) {
    return this._http.post(this.apiurl, model)
  }

  deleteDoctors(id) {
    return this._http.delete(this.apiurl.concat("/",id))
  }

  putDoctors(model:any) {
    return this._http.put(this.apiurl,model)
  }

}
