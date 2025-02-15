import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  nom:string="Mohamed Amine MEZGHICH"
  formation = "Angular DotNet"
  names:string[]= ["amine","marouen","awem","amal","aymen","nahed","abdessatar","abdelmoumen","zied","seleti","hamdi"];

}
