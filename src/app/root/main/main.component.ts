import { Component, OnInit } from '@angular/core';

import {TestService} from '../services/test.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private testService : TestService
  ) { }

  ngOnInit(): void {
  }

}
