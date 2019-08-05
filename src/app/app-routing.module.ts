import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';
import { ListaDoctoresComponent } from './components/lista-doctores/lista-doctores.component';
import { CitasComponent } from './components/citas/citas.component';
import { InicioComponent } from './components/inicio/inicio.component';


const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'pacientes', component: ListaPacientesComponent },
  { path: 'doctores', component: ListaDoctoresComponent },
  { path: 'citas', component: CitasComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
