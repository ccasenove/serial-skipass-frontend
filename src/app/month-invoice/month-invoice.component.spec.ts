import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthInvoiceComponent } from './month-invoice.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MonthInvoiceService} from '../month-invoice.service';
import { Observable, of } from 'rxjs';


describe('MonthInvoiceComponent', () => {
  let component: MonthInvoiceComponent;
  let fixture: ComponentFixture<MonthInvoiceComponent>;
  let monthInvoiceService: MonthInvoiceService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxDatatableModule ],
      declarations: [ MonthInvoiceComponent ],
      providers: [ MonthInvoiceService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthInvoiceComponent);
    component = fixture.componentInstance;
    monthInvoiceService = TestBed.get(MonthInvoiceService);
    spyOn(monthInvoiceService, 'getMonthInvoice').and.returnValue(of(   {idSkiPass: '200',
      invoiceSessions: [],
      invoicePeriodStartDate: '2019-05-31T22:00:00Z',
      invoicePeriodEndDate: '2019-06-29T22:00:00Z',
      invoiceGrossAmount: '200.00',
      invoiceNetAmount: '222.80'
    }));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the invoice TTC amount with stub value 222.80€', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.skipass-net-amount').textContent).toContain('Total T.T.C. : 222.80 € ');
  });

});
