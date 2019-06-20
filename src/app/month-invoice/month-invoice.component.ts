import { Component, OnInit } from '@angular/core';
import {MonthInvoiceService} from '../month-invoice.service';
import {Invoice} from '../invoice';
import {ForfaitService} from '../forfait.service';
import {Resort} from '../resort';

@Component({
  selector: 'app-month-invoice',
  templateUrl: './month-invoice.component.html',
  styleUrls: ['./month-invoice.component.css']
})
export class MonthInvoiceComponent implements OnInit {

  monthInvoice: Invoice;
  resortIdNameMap: Map<number, string>;

  constructor(private monthInvoiceService: MonthInvoiceService, private forfaitService: ForfaitService) { }

  ngOnInit() {

    this.monthInvoiceService.getMonthInvoice().subscribe(
      monthInvoice => this.monthInvoice = monthInvoice
    );

    this.forfaitService.getResorts().subscribe(resorts => this.generateResortHashMap(resorts));

  }

  private generateResortHashMap(resorts: Resort[]) {
    this.resortIdNameMap = new Map();
    resorts.forEach(resort => this.resortIdNameMap.set(resort.idResort, resort.resortName));
  }

}
