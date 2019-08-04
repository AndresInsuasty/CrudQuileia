import { Component, OnInit } from '@angular/core';
import { PacientService } from 'src/app/services/pacient.service';
import { PacientModel } from 'src/app/models/pacient.models';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit {
  modelPacient: any = {};
  modelPacientTemp: any = {};
  PacientRest: any[] = [];
  Pacient$: PacientModel[];
  index;
  postStatus: Object;

  constructor(
    private pacientService: PacientService,
    protected PacientService: PacientService,
  ) {

  }

  ngOnInit() {
    return this.pacientService.getPacients()
      .subscribe(data => this.Pacient$ = data);
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

  editPacient(i): void {
    this.modelPacientTemp.id = this.Pacient$[i].id;
    this.modelPacientTemp.name = this.Pacient$[i].name;
    this.modelPacientTemp.lastName = this.Pacient$[i].lastName;
    this.modelPacientTemp.birthday = this.Pacient$[i].birthday;
    this.modelPacientTemp.treatment = this.Pacient$[i].treatment;
    this.modelPacientTemp.identification = this.Pacient$[i].identification;
    this.modelPacientTemp.fee = this.Pacient$[i].fee;
    this.modelPacientTemp.newDate = this.Pacient$[i].newDate;
    this.modelPacientTemp.doctorList = this.Pacient$[i].doctorList;
    this.index = i;

  }
  updatePacient(): void {
    let i = this.index;
    for (let j = 0; j < this.Pacient$.length; j++) {
      if (i == j) {
        this.Pacient$[i] = this.modelPacientTemp;
        this.modelPacientTemp = {};
        console.log(this.Pacient$[i]);
        this.PacientService.putPacients(this.Pacient$[i])
          .subscribe((status) => {
            this.postStatus = status,
              console.log("hecho!");
          }
          )
      }
    }

  }




}

