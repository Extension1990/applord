import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { MainServiceService } from '../services/main-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  starships: any;
  starshipId: number;

  constructor(private service: MainServiceService, private modalCltr: ModalController) {}

  ngOnInit() {
    this.getStarships();
  }

  getStarships() {
    this.service.getStarships().subscribe((starships) => {
      this.starships = starships.results;
    });
  }

  async openModal() {
    const modal = await this.modalCltr.create({
      component: ModalComponent
    });

    await modal.present();
  }
}
