import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { MainServiceService } from '../services/main-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  chars: any;

  constructor(private service: MainServiceService, private modalCltr: ModalController) {}

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.service.getCharacters().subscribe((chars) => {
      this.chars = chars.results;
    });
  }

  async openModal() {
    const modal = await this.modalCltr.create({
      component: ModalComponent,
    });

    modal.present();
  }

}
