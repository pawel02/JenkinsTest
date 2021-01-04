import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtherService {

  value = 8;

  constructor() { }

  getVal()
  {
    return this.value;
  }
}
