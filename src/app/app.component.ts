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
export class AppComponent implements OnInit {
  modelDoctor: any = {};
  modelDoctorTemp: any = {};
  modelPacient: any = {};
  modelPacientTemp: any = {};
  DoctorRest: any = [];
  PacientRest: any[] = [];
  Doctor$: DoctorModel[];
  Pacient$: PacientModel[];
  index;
  postStatus: Object;

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







  // Function to add data-------------------------------------------
  addDoctor(): void {

    console.log(this.modelDoctor)
    this.doctorService.postDoctors(this.modelDoctor)
      .subscribe((status) => {
        this.postStatus = status,
          console.log("hecho!");
      }
      )
    this.Doctor$.push(this.modelDoctor)


  }
  addPacient(): void {
    console.log(this.modelPacient)
    this.PacientService.postPacients(this.modelPacient)
      .subscribe((status) => {
        this.postStatus = status,
          console.log("hecho!");
      }
      )
    this.Pacient$.push(this.modelPacient)

  }

  // functions to delete data-------------------------------------------
  deleteDoctor(i): void {
    var answer = confirm('Esta seguro de eliminar?')
    if (answer) {
      this.DoctorService.deleteDoctors(this.Doctor$[i].id)
      .subscribe((status) => {
        this.postStatus = status,
          console.log("hecho!");
      }
      )
      this.Doctor$.splice(i, 1)
    }


  }
  deletePacient(i): void {
    var answer = confirm('Esta seguro de eliminar?')
    if (answer) {
      this.PacientService.deletePacients(this.Pacient$[i].id)
      .subscribe((status) => {
        this.postStatus = status,
          console.log("hecho!");
      }
      )
      this.Pacient$.splice(i, 1)
    }

  }

  // Functions to edit data-------------------------------------------

  editDoctor(i): void {
    console.log(this.Doctor$)
    this.modelDoctorTemp.id = this.Doctor$[i].id;
    this.modelDoctorTemp.code = this.Doctor$[i].code;
    this.modelDoctorTemp.specialty = this.Doctor$[i].specialty;
    this.modelDoctorTemp.years = this.Doctor$[i].years;
    this.modelDoctorTemp.consultingRoom = this.Doctor$[i].consultingRoom;
    this.modelDoctorTemp.domicile = this.Doctor$[i].domicile;
    this.index = i;


  }

  editPacient(i): void {
    this.modelPacientTemp.name = this.Pacient$[i].name;
    this.modelPacientTemp.lastName = this.Pacient$[i].lastName;
    this.modelPacientTemp.birthday = this.Pacient$[i].birthday;
    this.modelPacientTemp.treatment = this.Pacient$[i].treatment;
    this.modelPacientTemp.identification = this.Pacient$[i].identification;
    this.modelPacientTemp.fee = this.Pacient$[i].fee;
    this.modelPacientTemp.newDate = this.Pacient$[i].newDate;
    this.modelPacientTemp.doctorList = this.Pacient$[i].doctorsList;
    this.index = i;

  }

  // Function to update data-------------------------------------------
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






