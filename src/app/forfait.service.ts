import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Resort} from './resort';

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

  public getResorts(): Observable<Resort[]> {
    return this.httpClient.get<Resort[]>(`${API_ROOT}/resorts`);
  }
}
