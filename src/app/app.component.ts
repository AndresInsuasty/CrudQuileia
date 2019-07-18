import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  doctorArray=[
  {id:1, code:'ABC123',specialty:'Pediatria', years:4, consultingRoom:'1', domicile: false},
  {id:2, code:'CI1',specialty:'Cirugia', years:1, consultingRoom:'1a', domicile: true},
  {id:3, code:'CA9',specialty:'Cardiologo', years:9, consultingRoom:'Z3', domicile: false}
  ];
  pacientArray = [
    { id: 1, name: 'Andres', lastname: 'Insuasty', birthday: '10/10/1995', identification: '11111', doctorPacient: this.doctorArray[2].specialty, treatment: false, fee: 10, newDate: '20/07/2019' },
    { id: 2, name: 'Cesar', lastname: 'Palacios', birthday: '30/02/1984', identification: '22222', doctorPacient: this.doctorArray[1].specialty, treatment: true, fee: 23, newDate: '21/07/2019' }
  ];

  // Models to manage data
  modelDoctor:any={};
  modelDoctorTemp:any={};
  modelPacient:any={};
  modelPacientTemp:any={};

  // Function to add data
  addDoctor():void{
    this.doctorArray.push(this.modelDoctor)

  }
  addPacient():void{
    this.pacientArray.push(this.modelPacient)

  }

  // functions to delete data
  deleteDoctor():void{

  }
  deletePacient():void{

  } 

  // Functions to edit data
  index;
  editDoctor(i):void{
    this.modelDoctorTemp.code = this.doctorArray[i].code;
    this.modelDoctorTemp.specialty = this.doctorArray[i].specialty;
    this.modelDoctorTemp.years = this.doctorArray[i].years;
    this.modelDoctorTemp.consultingRoom = this.doctorArray[i].consultingRoom;
    this.modelDoctorTemp.domicile = this.doctorArray[i].domicile; 
    this.index=i;

  }
 
  editPacient():void{

  }

  // Function to update data
  updateDoctor():void{
    let i= this.index;
    for(let j=0;j<this.doctorArray.length;j++){
      if(i==j){
        this.doctorArray[i]=this.modelDoctorTemp;
        this.modelDoctorTemp={};
      }
    }
  }

  updatePacient():void{
    
  }


}

  
  



