import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-spinner-modal',
  templateUrl: './spinner-modal.component.html',
  styleUrls: ['./spinner-modal.component.scss']
})
export class SpinnerModalComponent implements OnInit {

  constructor(public spinnerModal: SpinnerService) { }

  ngOnInit(): void {
  }

}
