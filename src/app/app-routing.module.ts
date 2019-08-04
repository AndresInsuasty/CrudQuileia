import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';
import { ListaDoctoresComponent } from './components/lista-doctores/lista-doctores.component';
import { CitasComponent } from './components/citas/citas.component';


const routes: Routes = [
  { path: '', component: CitasComponent},
  { path: 'pacientes', component: ListaPacientesComponent },
  { path: 'doctores', component: ListaDoctoresComponent },
  { path: 'citas', component: CitasComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
