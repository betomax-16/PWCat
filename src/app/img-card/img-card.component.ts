import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})

export class ImgCardComponent implements OnInit {

  public src: string;
  private image: CatImage = {
    message: 'Progressive%20Web%20Cat',
    api: 'https://cataas.com/cat/says/',
    fontsize: 40
  };

  constructor() {
    this.src = this.image.api + this.image.message;
  }

  ngOnInit() {
  }

  generateSrc(): void {
    this.src = this.image.api + this.image.message + '?size=' + this.image.fontsize + '&ts=' + Date.now();
  }
}

class CatImage {
  message: string;
  api: string;
  fontsize: Number;
}
