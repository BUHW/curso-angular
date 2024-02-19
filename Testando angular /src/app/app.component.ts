import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curso-angular';

  showNav = false;

  showCadastro() {
      console.log(this.showNav)
      this.showNav = !this.showNav;
      console.log(this.showNav)
  }
}
