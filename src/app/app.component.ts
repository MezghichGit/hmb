import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  nom:string="Mohamed Amine MEZGHICH"
  formation = "Angular DotNet"
  names:string[]= ["amine","marouen","awem","amal","aymen","nahed","abdessatar","abdelmoumen","zied","seleti","hamdi"];
}
