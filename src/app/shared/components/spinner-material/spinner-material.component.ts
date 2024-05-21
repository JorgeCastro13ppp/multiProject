import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner-material',
  templateUrl: './spinner-material.component.html',
  styleUrls: ['./spinner-material.component.scss']
})
export class SpinnerMaterialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() isLoadingMaterial?: boolean;

}
