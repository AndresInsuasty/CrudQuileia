import { Component, OnInit } from '@angular/core';
import { DoctorService } from './services/doctor.service';
import { PacientService } from './services/pacient.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DoctorModel } from './models/doctor.models';
import { PacientModel } from './models/pacient.models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  modelDoctor: any = {};
  modelDoctorTemp: any = {};
  modelPacient: any = {};
  modelPacientTemp: any = {};
  DoctorRest: any = [];
  PacientRest: any[]=[];
  Doctor$ : DoctorModel[];
  Pacient$ : PacientModel[];
  index;

  constructor(
    protected DoctorService: DoctorService,
    protected PacientService: PacientService,
    private doctorService: DoctorService,
    private pacientService: PacientService
  ) {
  }

  
  ngOnInit() {
    return this.doctorService.getDoctors()
      .subscribe(data => this.Doctor$ = data),
    this.pacientService.getPacients()
      .subscribe(data => this.Pacient$ = data);
             
  }



  



  // Function to add data
  addDoctor(): void {
    // this.doctorArray.push(this.modelDoctor)
    this.Doctor$.push(this.modelDoctor)

  }
  addPacient(): void {
    // this.pacientArray.push(this.modelPacient)

  }

  // functions to delete data
  deleteDoctor(i): void {
    var answer = confirm('Esta seguro de eliminar?')
    if(answer){
      this.Doctor$.splice(i,1)
    }
    

  }
  deletePacient(): void {

  }

  // Functions to edit data

  editDoctor(i): void {
    this.modelDoctorTemp.code = this.Doctor$[i].code;
    this.modelDoctorTemp.specialty = this.Doctor$[i].specialty;
    this.modelDoctorTemp.years = this.Doctor$[i].years;
    this.modelDoctorTemp.consultingRoom = this.Doctor$[i].consultingroom;
    this.modelDoctorTemp.domicile = this.Doctor$[i].domicile;
    this.index = i;

  }

  editPacient(): void {

  }

  // Function to update data
  updateDoctor(): void {
    let i = this.index;
    for (let j = 0; j < this.Doctor$.length; j++) {
      if (i == j) {
        this.Doctor$[i] = this.modelDoctorTemp;
        this.modelDoctorTemp = {};
      }
    }
  }

  updatePacient(): void {

  }

  


}






