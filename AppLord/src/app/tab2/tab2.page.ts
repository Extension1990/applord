import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MainServiceService } from '../services/main-service.service';
import { Tab2ModalComponent } from '../tab2-modal/tab2-modal.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  chars: any;
  char: any;

  constructor(private service: MainServiceService, private modalCltr: ModalController) {}

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.service.getCharacters().subscribe((chars) => {
      this.chars = chars.results;
      console.log(this.chars);
    });
  }

  async openModal(char) {
    const modal = await this.modalCltr.create({
      component: Tab2ModalComponent,
      componentProps: {
        name: char.name,
        eyeColor: char.eye_color,
        hairColor: char.hair_color,
        skinColor: char.skin_color,
        height: char.height,
        birthYear: char.birth_year
      }
    });

    return await modal.present();
  }

}
