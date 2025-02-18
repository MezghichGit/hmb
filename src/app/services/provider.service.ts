import { Injectable } from '@angular/core';
import { Provider } from '../Models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  
  constructor(private http: HttpClient) { }

  getAllProviders(): Observable<Provider[]> {
    return this.http.get<Provider[]>(environment.baseUrl+"providers/");
  }
  // suite des méthodes

  saveProvider(provider: Provider): Observable<Provider> {
    return this.http.post<Provider>(environment.baseUrl+"providers/", provider);
  }

  deleteProvider(id: any) {
    return this.http.delete(environment.baseUrl+"providers/" + id);
  }

  getProviderById(id: any) {
    return this.http.get(environment.baseUrl+"/providers/" + id);
  }

  updateProvider(provider: Provider): Observable<Provider> {
    return this.http.put<Provider>(environment.baseUrl+"providers/", provider);
  }


}
