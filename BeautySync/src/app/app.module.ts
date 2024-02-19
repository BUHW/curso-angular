import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AgendamentoComponent } from './components/pages/agendamento/agendamento.component';
import { TrabalhoComponent } from './components/pages/trabalho/trabalho.component';
import { LoginComponent } from './components/pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    AgendamentoComponent,
    TrabalhoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
