import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../utils/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  constructor(public spinner:SpinnerService) { }

  ngOnInit(): void {
  }

}