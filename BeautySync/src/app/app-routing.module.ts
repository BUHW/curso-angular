import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AgendamentoComponent } from './components/pages/agendamento/agendamento.component';
import { TrabalhoComponent } from './components/pages/trabalho/trabalho.component';
import { LoginComponent } from './components/pages/login/login.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },
  {
    path: 'agendamento',
    component: AgendamentoComponent
  },
  {
    path: 'trabalho',
    component: TrabalhoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
