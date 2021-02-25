import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { MainServiceService } from '../services/main-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Input() filmId: number;

  // filmId = null;
  film: any;

  constructor(private service: MainServiceService, private modalCltr: ModalController, private navParams: NavParams) { }

  ngOnInit() {
    this.filmId = this.navParams.get('filmId');
    console.log(this.filmId);
    this.service.getFilmsById(this.filmId).subscribe((film) => {
      console.log(film);
    });
  }

  dismissModal() {
    this.modalCltr.dismiss();
  }

}
