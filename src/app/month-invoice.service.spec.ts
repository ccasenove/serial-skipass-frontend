import { MonthInvoiceService } from './month-invoice.service';
import {of} from 'rxjs';
import {Invoice} from './invoice';

describe('MonthInvoiceService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let monthInvoiceService: MonthInvoiceService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    monthInvoiceService = new MonthInvoiceService(httpClientSpy as any);
  });

  it('should return expected invoice', () => {
    const expectedInvoice: Invoice = {idSkiPass: '200',
                                        invoiceSessions: [],
                                        invoicePeriodStartDate: new Date('2019-06-1'),
                                        invoicePeriodEndDate: new Date('2019-06-31'),
                                        invoiceGrossAmount: 0.00,
                                        invoiceNetAmount: 0.00}

    httpClientSpy.get.and.returnValue(of(expectedInvoice));

    monthInvoiceService.getMonthInvoice().subscribe(
      invoice => expect<Invoice>(invoice as Invoice).toEqual(expectedInvoice,
                                                'This is not the response that was expected, expected Invoice'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
});
