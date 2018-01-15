import {Component, OnInit} from '@angular/core';
import {PhotoViewerService} from '../../services/photo-viewer/photo-viewer.service';

@Component({
  selector: 'photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.scss']
})
export class PhotoViewerComponent implements OnInit {

  constructor(public photoViewerService: PhotoViewerService) {
  }

  ngOnInit() {
  }

}
