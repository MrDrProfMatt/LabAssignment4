import { Component, OnInit } from '@angular/core';

interface ISimilarProducts {
  id?: number;
  image_url: string;
  description:string;
}
@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.css']
})
export class ArtworksComponent implements OnInit {


  similarProducts:Array<ISimilarProducts> = [];

  constructor() { }

  ngOnInit(){
    this.similarProducts=[
      {
        image_url:'assets/img/thumbs/116010.jpg',
        description: 'Artist Holding a Thistle'
      },
      {
        image_url:'assets/img/thumbs/120010.jpg',
        description: 'Portrait of Eleanor of Toledo'
      },
      {
        image_url:'assets/img/thumbs/107010.jpg',
        description: 'Madame de Pompadour'
      },
      {
        image_url:'assets/img/thumbs/106020.jpg',
        description: 'Girl with a Pearl Earring'
      }

    ]
  }

}
