import {Injectable} from '@angular/core';

@Injectable()
export class PhotoViewerService {
  pictureUrl: string = null;

  showFullImage(pictureUrl: string) {
    this.pictureUrl = pictureUrl;
  }

  hideFullImage() {
    this.pictureUrl = null;
  }

}
