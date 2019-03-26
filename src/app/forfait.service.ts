import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const FORFAIT_ID = "123";

@Injectable({
  providedIn: 'root'
})
export class ForfaitService {

  constructor(private httpClient: HttpClient) { }

  public startConso(stationId: string) {
    return this.httpClient.put(`/forfait/${FORFAIT_ID}/start`, {
      stationId
    });
  }

  public stopConso() {
    return this.httpClient.put(`/forfait/${FORFAIT_ID}/stop`, null);
  }
}
