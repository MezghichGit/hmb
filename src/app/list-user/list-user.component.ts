import { Component } from '@angular/core';
import { User } from '../Models';


@Component({
  selector: 'app-list-user',
  standalone: false,
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent {

  personnels:User[]=[
    {"id":1,"nom":"Mezghich","prenom":"Mohamed","adresse":"Tunis","tel":"98787521"},
    {"id":2,"nom":"Mahmoud","prenom":"AbdelMoumen","adresse":"Bizerte","tel":"98100200"},
    {"id":3,"nom":"Touhri","prenom":"Abdesatar","adresse":"Tunis","tel":"98300400"}
  ];

  display() {
    alert("Hello Angular")
    console.log("Bouton cliqued");
  }
}
