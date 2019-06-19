import { AppPage } from './app.po';
import {browser, by, element, logging} from 'protractor';
import {formatDate} from '@angular/common';


describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.driver.manage().window().maximize();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to skipass!');
  });

  it('should display month invoice page', () => {
    page.navigateTo();
    const monthInvoice = element(by.css('a[routerlink="month-invoice"]'));
    browser.waitForAngular();
    monthInvoice.click();
    browser.waitForAngular();
    const date = new Date();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    expect(page.getH2Text()).toEqual(
      'Facture du '.concat(formatDate(firstDay, 'dd/MM/yyyy', 'en')).concat(' au ').concat(formatDate(lastDay, 'dd/MM/yyyy', 'en')));
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
