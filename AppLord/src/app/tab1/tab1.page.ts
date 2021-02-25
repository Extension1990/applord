import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { MainServiceService } from '../services/main-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  @Input() title: string;
  @Input() director: string;
  @Input() producer: string;

  film: any;
  films: any;
  filmId: number;
  value: number;

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
    this.service.getFilmsById(filmId).subscribe((film) => {
      this.film = film.results;
      console.log(this.film);
    });
  }

  async openModal() {
    const modal = await this.modalCltr.create({
      component: ModalComponent,
      componentProps: {
        filmId: this.value,
        title: this.title,
        director: this.director,
        producer: this.producer
      }
    });

    return await modal.present();
  }

}
