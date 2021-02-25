import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../services/main-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  chars: any;

  constructor(private service: MainServiceService) {}

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.service.getCharacters().subscribe((chars) => {
      this.chars = chars.results;
      console.log(this.chars);
    });
  }

}
