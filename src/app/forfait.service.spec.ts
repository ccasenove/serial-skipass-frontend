import { ForfaitService } from './forfait.service';
import {Resort} from './resort';
import { of } from 'rxjs';

describe('ForfaitService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let forfaitService: ForfaitService;

  beforeEach(() => {
      httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      forfaitService = new ForfaitService(httpClientSpy as any);
    });

  it('should return expected resorts', () => {
    const expectedResorts: Resort[] = [{ idResort: 1, resortName: 'Station 1', hourlyGrossPrice: 99 },
      { idResort: 2, resortName: 'Station 2', hourlyGrossPrice: 199 }];

    httpClientSpy.get.and.returnValue(of(expectedResorts));

    forfaitService.getResorts().subscribe(
      resorts => expect<Resort>(resorts).toEqual(expectedResorts, 'This is not the response that was expected, expected Resorts[]'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

});
