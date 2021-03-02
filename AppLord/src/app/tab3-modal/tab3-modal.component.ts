import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab3-modal',
  templateUrl: './tab3-modal.component.html',
  styleUrls: ['./tab3-modal.component.scss'],
})
export class Tab3ModalComponent {

  @Input() name: string;
  @Input() mglt: string;
  @Input() cargoCapacity: string;
  @Input() consumables: string;
  @Input() credits: string;
  @Input() crew: string;
  @Input() films: string;
  @Input() hyperdrive: string;
  @Input() lenght: string;
  @Input() manufacturer: string;
  @Input() speed: string;
  @Input() model: string;
  @Input() passengers: string;
  @Input() starshipClass: string;

  constructor(private modalCltr: ModalController) { }

  dismissModal() {
    this.modalCltr.dismiss();
  }

}
