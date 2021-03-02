import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2-modal',
  templateUrl: './tab2-modal.component.html',
  styleUrls: ['./tab2-modal.component.scss'],
})
export class Tab2ModalComponent {

  @Input() name: string;
  @Input() eyeColor: string;
  @Input() hairColor: string;
  @Input() skinColor: string;
  @Input() height: string;
  @Input() birthYear: string;

  constructor(private modalCltr: ModalController) { }

  dismissModal() {
    this.modalCltr.dismiss();
  }

}
