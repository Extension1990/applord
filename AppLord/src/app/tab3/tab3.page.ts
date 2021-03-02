import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MainServiceService } from '../services/main-service.service';
import { Tab3ModalComponent } from '../tab3-modal/tab3-modal.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  starships: any;
  starship: any;

  constructor(private service: MainServiceService, private modalCltr: ModalController) {}

  ngOnInit() {
    this.getStarships();
  }

  getStarships() {
    this.service.getStarships().subscribe((starships) => {
      this.starships = starships.results;
      console.log(this.starships);
    });
  }

  async openModal(starship) {
    const modal = await this.modalCltr.create({
      component: Tab3ModalComponent,
      componentProps: {
        cargoCapacity: starship.cargo_capacity,
        consumables: starship.consumables,
        credits: starship.cost_in_credits,
        crew: starship.crew,
        films: starship.films,
        hyperdrive: starship.hyperdrive_rating,
        lenght: starship.length,
        manufacturer: starship.manufacturer,
        speed: starship.max_atmosphering_speed,
        model: starship.model,
        name: starship.name,
        passengers: starship.passengers,
        starshipClass: starship.starship_class
      }
    });

    await modal.present();
  }
}
