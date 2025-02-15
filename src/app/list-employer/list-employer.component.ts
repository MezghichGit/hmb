import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../services/employer.service';
import { Employer } from '../Models';

@Component({
  selector: 'app-list-employer',
  standalone: false,
  templateUrl: './list-employer.component.html',
  styleUrl: './list-employer.component.css'
})
export class ListEmployerComponent implements OnInit{
  //employers:any;
  employers:Employer[]=[];
  constructor(private service:EmployerService){
   // console.log("Constructeur")
  }

  ngOnInit(): void {
    //console.log("ngOnInit")
    this.service.getAllEmployer().subscribe(
     (data) =>
        {
          //console.log(data)
          this.employers = data;
          console.log(this.employers)
        }
    );
  }

}
