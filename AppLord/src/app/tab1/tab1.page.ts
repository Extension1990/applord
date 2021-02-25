import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { MainServiceService } from '../services/main-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  films: any;
  filmId: number;

  constructor(private service: MainServiceService, private modalCltr: ModalController) {}

  ngOnInit() {
    this.getFilms();
  }

  getFilms() {
    this.service.getFilms().subscribe((films) => {
      this.films = films.results;
      console.log(this.films);
    });
  }
  getFilmsById(filmId) {
    this.service.getFilmsById(filmId).subscribe((films) => {
      this.films = films.results;
      console.log(this.films);
    });
  }

  async openModal() {
    const modal = await this.modalCltr.create({
      component: ModalComponent
    });

    await modal.present();
  }

}
