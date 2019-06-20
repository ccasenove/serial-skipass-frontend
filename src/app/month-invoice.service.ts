import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Invoice } from './invoice';

const FORFAIT_ID = 200;

const API_ROOT = '/rest/api/v1'

@Injectable({
  providedIn: 'root'
})
export class MonthInvoiceService {

  constructor(private httpClient: HttpClient) { }

  public getMonthInvoice(): Observable<Invoice> {
    return this.httpClient.get<Invoice>(`${API_ROOT}/forfaits/${FORFAIT_ID}/invoice`);
  }
}
