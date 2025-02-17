import { Component, OnInit } from '@angular/core';
import { Provider } from '../Models';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-list-providers',
  standalone: false,
  templateUrl: './list-providers.component.html',
  styleUrl: './list-providers.component.css'
})
export class ListProvidersComponent implements OnInit{
  
  providers:Provider[]=[];
    constructor(private service:ProviderService){
    }

  ngOnInit(): void {
    this.service.getAllProviders().subscribe(
      (data) =>
         {
           //console.log(data)
           this.providers = data;
           //console.log(this.employers)
         }
     );
  }

}
