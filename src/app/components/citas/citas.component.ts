import { Component, OnInit } from '@angular/core';
import { CitasService } from 'src/app/services/citas.service';
import { CitasModel } from 'src/app/models/citas.model';
import { DoctorModel } from 'src/app/models/doctor.models';
import { PacientModel } from 'src/app/models/pacient.models';
import { PacientService } from 'src/app/services/pacient.service';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  modelCitas: any = {};
  modelCitasTemp: any = {};
  CitasRest: any = {};
  Citas$: CitasModel[];
  index;
  postStatus: Object;

  // Variables to refer a doctor
  modelDoctor: any = {};
  modelDoctorTemp: any = {};
  DoctorRest: any = [];
  Doctor$: DoctorModel[];

  // Vatiables to refer a pacient
  modelPacient: any = {};
  modelPacientTemp: any = {};
  PacientRest: any[] = [];
  Pacient$: PacientModel[];

  constructor(
    private citasService: CitasService,
    protected CitasService: CitasService,
    private pacientService: PacientService,
    private doctorService: DoctorService,
  ) { }

  ngOnInit() {
    return this.doctorService.getDoctors()
      .subscribe(data => this.Doctor$ = data),
      this.pacientService.getPacients()
        .subscribe(data => this.Pacient$ = data),
      this.citasService.getCitas()
        .subscribe(data => this.Citas$ = data);

  }

  addCita(): void {

    console.log(this.modelCitas)
    this.citasService.postCitas(this.modelCitas)
      .subscribe((status) => {
        this.postStatus = status, console.log("hecho!");
      }
      )
    this.Citas$.push(this.modelCitas)
  }

  deleteCitas(i): void {
    var answer = confirm('Esta seguro de eliminar?')
    if (answer) {
      this.CitasService.deleteCitas(this.Citas$[i].id)
        .subscribe((status) => {
          this.postStatus = status,
            console.log("hecho!");
        }
        )
      this.Citas$.splice(i, 1)
    }
  }

}
