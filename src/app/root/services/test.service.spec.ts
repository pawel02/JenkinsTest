import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';
import {OtherService} from './other.service';

export class FakeValue extends OtherService
{
  value = 77;
}

describe('TestService', () => {
  let service: TestService;

  /*
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestService);
  });*/

  it('spy example', ()=>
  {
    const valSpy = jasmine.createSpyObj('OtherService', ['getVal']);
    //return value when getVal gets called
    const stubVal = 6;
    valSpy.getVal.and.returnValue(stubVal);

    service = new TestService(valSpy);

    expect(service.GetVal()).toBe(stubVal, 'service returned stub value');
  });

  // it('Get Observable', (done: DoneFn)=>{
  //   service.sObs.subscribe(value => {
  //     expect(value).toBe('Something');
  //     done();
  //   });
  //   service.next();
  // })

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
