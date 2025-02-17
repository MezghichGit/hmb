import { Injectable } from '@angular/core';
import { Provider } from '../Models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient) { }

  getAllProviders(): Observable<Provider[]>{
      return this.http.get<Provider[]>("http://127.0.0.1:8085/providers/");
    }
    // suite des méthodes

    saveProvider(provider:Provider): Observable<Provider>{
      return this.http.post<Provider>("http://127.0.0.1:8085/providers/",provider);
    }
}
