import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {

  photos = [];

  constructor(
    private photosService: PhotosService
  ) { }

  ngOnInit() {
    this.photosService.getPhotos()
      .subscribe(data => {
        this.photos = data;
      })
  }

}
