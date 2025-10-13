import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IImageMetaData} from "../Dto/ImageDto";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) {

  }

  loadImages() {

  }

  uploadImage(imageMetaData: IImageMetaData, imageData: ImageData) {

  }


}
