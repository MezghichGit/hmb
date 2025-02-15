import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employer } from '../Models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  constructor(private http: HttpClient) { } // injection de dépendance

  getAllEmployer(): Observable<Employer[]>{
    return this.http.get<Employer[]>("https://jsonplaceholder.typicode.com/users");
  }

  getEmployerById(id: number) {
    return this.http.get("https://jsonplaceholder.typicode.com/users" + id);
  }

  /*
    saveEmployer(employer:Employer){
      return this.http.post("https://jsonplaceholder.typicode.com/users",employer);
    }*/
}
