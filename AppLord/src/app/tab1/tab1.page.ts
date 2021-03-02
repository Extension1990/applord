import { DirectiveNormalizer } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { title } from 'process';
import { ModalComponent } from '../modal/modal.component';
import { MainServiceService } from '../services/main-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  film: any;
  films: any;

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

  async openModal(film) {
    const modal = await this.modalCltr.create({
      component: ModalComponent,
      componentProps: {
        title: film.title,
        director: film.director,
        producer: film.producer
      }
    });
    console.log(title);
    return await modal.present();
  }

}
