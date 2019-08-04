import { Component, OnInit } from '@angular/core';
import { DoctorModel } from 'src/app/models/doctor.models';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-lista-doctores',
  templateUrl: './lista-doctores.component.html',
  styleUrls: ['./lista-doctores.component.css']
})
export class ListaDoctoresComponent implements OnInit {
  modelDoctor: any = {};
  modelDoctorTemp: any = {};
  DoctorRest: any = [];
  Doctor$: DoctorModel[];
  index;
  postStatus: Object;

  constructor(
    protected DoctorService: DoctorService,
    private doctorService: DoctorService,

  ) { }

  ngOnInit() {
    return this.doctorService.getDoctors()
      .subscribe(data => this.Doctor$ = data)
  }

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
  updateDoctor(): void {
    let i = this.index;
    for (let j = 0; j < this.Doctor$.length; j++) {
      if (i == j) {
        this.Doctor$[i] = this.modelDoctorTemp;
        this.modelDoctorTemp = {};
        console.log(this.Doctor$[i]);
        this.DoctorService.putDoctors(this.Doctor$[i])
          .subscribe((status) => {
            this.postStatus = status,
              console.log("hecho!");
          }
          )
      }
    }
  }


}
