export class Invoice {
  public idSkiPass: string;
  public invoicePeriodStartDate: Date;
  public invoicePeriodEndDate: Date;
  public invoiceGrossAmount: number;
  public invoiceNetAmount: number;
  public invoiceSessions: InvoiceSession[];
}

class InvoiceSession {
  public idSession: string;
  public startDate: Date;
  public endDate: Date;
  public idResort: string;
  public idSkiPass: string;
  public sessionAmount = 1;
}
