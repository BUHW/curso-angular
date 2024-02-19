import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// import { ChartModule } from 'ngx-chartjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { ListaComponent } from './components/pages/lista/lista.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TesteComponent } from './components/teste/teste.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,
    CadastroComponent,
    ListaComponent,
    SidebarComponent,
    TesteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
