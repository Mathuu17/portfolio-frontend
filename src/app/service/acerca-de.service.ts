import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AcercaDe } from '../model/acerca-de';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

  URL = 'https://frontendlms3.onrender.com/acercade/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<AcercaDe[]> {
    return this.httpClient.get<AcercaDe[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<AcercaDe> {
    return this.httpClient.get<AcercaDe>(this.URL + `detail/${id}`);
  }

  public save(acercaDe: AcercaDe): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', acercaDe);
  }

  public update(id: number, acercaDe: AcercaDe): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, acercaDe);
  }
}
