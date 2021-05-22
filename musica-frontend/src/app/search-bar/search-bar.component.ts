import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PreviewpageService } from 'src/app/previewpage/previewpage.service';


interface Search {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() searchQuery: EventEmitter<string> = new EventEmitter<string>();
  selectedValue: string;
  selectedCar: string;
    search: Search[] = [
      {value: 'title', viewValue: 'Title'},
      {value: 'artist', viewValue: 'Artist'},
      {value: 'genre', viewValue: 'Genre'}

    ];
  constructor(private previewpageService: PreviewpageService) { }

  ngOnInit(): void {
  }
  passQueryString(value:any) {
    this.searchQuery.emit(value);
    this.previewpageService.clearCache();
  }

}
