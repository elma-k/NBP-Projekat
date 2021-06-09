import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PreviewpageService } from 'src/app/previewpage/previewpage.service';


interface Search {
  value: string;
  viewValue: string;
}

interface Emit {
    value: string;
    select: string;
}



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() searchQuery: EventEmitter<Emit> = new EventEmitter<Emit>();
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
    
    const v: Emit = { value:value, select: this.selectedValue };

    this.searchQuery.emit(v);
    this.previewpageService.clearCache();
  }

}
