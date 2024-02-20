import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  private apiUrl = 'api/destinations';
  constructor(private http: HttpClient) {}
  getDestinations(): Observables<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getDestinationById(id: number): Observable<any> {
    return this.http.get<any>('${this.apiUrl/${id}');
  }
}
