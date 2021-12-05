import { Component, OnInit } from '@angular/core';

interface IArtwork{
  id?:number;
  image_url:string;
  title:string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  artworks: Array<IArtwork> =[];
  constructor() { }

  ngOnInit() {
    this.artworks=[
      {
        image_url: 'assets/img/thumbs/120010.jpg',
        title: 'Portrait of Eleanor of Toledo',
        description: 'The Portrain of Elanor of Toledo and Her Son is a painting by the italian artist Agholo di Cosmio, known as Bronzino, finished ca. 1545. One of his most famous works, it is housed in the Uffizi Gallery of Florence, Italy and is considered one of the preeminet examples of Mannerist portaiture.'
      },
      {
        image_url: 'assets/img/thumbs/116010.jpg',
        title: 'Portrait of the Artist',
        description: 'Portrait of the Artist Holding a Thistle is an oil painting on parchment pasted on canvas by German artist Albrecht Dürer, painted in 1493. It is the earliest of Dürers painted self-portraits and has been identified as one of the first self-portraits painted by a Northern artist.'
      },
      {
        image_url: 'assets/img/thumbs/106020.jpg',
        title: 'Portrait of Eleanor of Toledo',
        description: 'The Portrain of Elanor of Toledo and Her Son is a painting by the italian artist Agholo di Cosmio, known as Bronzino, finished ca. 1545. One of his most famous works, it is housed in the Uffizi Gallery of Florence, Italy and is considered one of the preeminet examples of Mannerist portaiture.'
      }
    ]
  }

}
