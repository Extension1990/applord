import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {

  @Input() title: string;
  @Input() director: string;
  @Input() producer: string;
  @Input() openingVrawl: string;
  @Input() chars: number;

  constructor(private modalCltr: ModalController) { }

  dismissModal() {
    this.modalCltr.dismiss();
  }

}
