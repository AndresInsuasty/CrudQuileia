import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



// Services
import { DoctorService } from './services/doctor.service';
import { PacientService } from './services/pacient.service';
import { HttpClientModule } from '@angular/common/http';
import { ListaDoctoresComponent } from './components/lista-doctores/lista-doctores.component';
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';
import { CitasComponent } from './components/citas/citas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDoctoresComponent,
    ListaPacientesComponent,
    CitasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DoctorService, PacientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
