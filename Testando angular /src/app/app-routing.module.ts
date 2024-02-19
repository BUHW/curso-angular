import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { ListaComponent } from './components/pages/lista/lista.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'lista',
    component: ListaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
