import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

const FORFAIT_ID = 200;

const API_ROOT = '/rest/api/v1'

@Injectable({
  providedIn: 'root'
})
export class ForfaitService {

  constructor(private httpClient: HttpClient) { }

  public start(stationId: number) {
    return this.httpClient.put(`${API_ROOT}/forfaits/${FORFAIT_ID}/start`, stationId);
  }

  public stop() {
    return this.httpClient.put(`${API_ROOT}/forfaits/${FORFAIT_ID}/stop`, null);
  }

  public getResorts() {
    return of([{id: 1, name: 'La Clusaz'},{id: 2, name: 'La Feclaz'}, {id: 3, name: 'Le revard'}]);
  }
}
