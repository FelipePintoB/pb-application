import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PetImagesService {

  baseUrl = environment.petsImagesUrl;

  constructor(private httpClient: HttpClient) { }

  getDogImages(amount: number): Observable<string[]> {
    return this.httpClient.get(`${this.baseUrl}/${amount}`)
      .pipe(
        map( (data: any) => {
          return data.message // Envío solo el arreglo imagenes
        })
      );
  }
}
