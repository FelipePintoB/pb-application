import { Component, OnInit } from '@angular/core';
import { PetImagesService } from '@core/services/pet-images.service';

@Component({
  selector: 'app-pets-images',
  templateUrl: './pets-images.component.html',
  styleUrls: ['./pets-images.component.scss']
})
export class PetsImagesComponent implements OnInit {

  dogImages: string[] = [];

  hastImages = false;

  constructor(private petImagesService: PetImagesService) { }

  ngOnInit(): void {
    this.petImagesService.getDogImages(5).subscribe(
      {
        next: (data) => {
          console.log(data)
          this.dogImages = data;
          this.hastImages = true;
        },
        error: error => console.error(error),
        complete: () => console.log("Complete")
      }
    )
  }

}
