import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-image-gallery-layout-2',
  templateUrl: 'image-gallery-layout-2.page.html',
  styleUrls: ['image-gallery-layout-2.page.scss'],
})
export class ImageGalleryLayout2Page implements OnChanges {
  @Input() data: any;

  @Output() onItemClick = new EventEmitter();
  @Output() onFavorite = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onItemClickFunc(item, index): void {
    if (event) {
      event.stopPropagation();
    }
    this.onItemClick.emit({
      'item':item,
      'index':index
    });
  }

  onFavoriteFunc(item): void {
    if (event) {
      event.stopPropagation();
    }
    this.onFavorite.emit(item);
  }
}
