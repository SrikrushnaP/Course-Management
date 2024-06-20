import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { HomeComponent } from "./components/home/home.component";
import { NavComponent } from "./components/nav/nav.component";
import { RegisterComponent } from "./components/register/register.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FontAwesomeModule, HomeComponent, NavComponent, RegisterComponent]
})
export class AppComponent {
  title = 'Course-Management-Frontend';
  faCoffee = faCoffee;
}
