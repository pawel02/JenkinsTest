import { Injectable } from '@angular/core';

import {Subject, Observable, of} from 'rxjs';
import {OtherService} from './other.service';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  private x : string = 'Something';
  private SSub: Subject<string> = new Subject<string>();
  public sObs = this.SSub.asObservable();

  constructor(private otherService: OtherService) 
  {
  }

  GetVal() : number
  {
    return this.otherService.getVal();
  }

  // used for testing only
  next()
  {
    this.SSub.next(this.x);
  }
}
