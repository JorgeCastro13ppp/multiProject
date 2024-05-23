import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner-bootstrap',
  templateUrl: './spinner-bootstrap.component.html',
  styleUrls: ['./spinner-bootstrap.component.scss']
})
export class SpinnerBootstrapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() isLoadingBootstrap?: boolean;

}
