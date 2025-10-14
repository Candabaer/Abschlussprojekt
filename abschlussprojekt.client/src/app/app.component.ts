import { HttpClient } from '@angular/common/http';
import {Component, ElementRef, HostListener, Input, OnInit, signal, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: false
})
export class AppComponent implements OnInit {

  searchVisible: boolean = false;
  showSearch: boolean = false;
  searchText: string = '';
  @ViewChild('searchContainer') searchContainer!: ElementRef;

  @HostListener('document:click', ['$event'])

  onClick(event: MouseEvent) {
    if(!this.searchContainer){
      return;
    }
    const clickedInside = this.searchContainer.nativeElement.contains(event.target);
    console.log(this.searchContainer.nativeElement);
    if (!clickedInside && this.showSearch) {
      this.toggleSearch(event);
    }
  }

    ngOnInit(): void {

    }

  toggleSearch(event: MouseEvent) {
    event?.stopPropagation();
    if (this.searchVisible) {
      this.showSearch = false;
      setTimeout(() => { this.searchVisible = false;}, 500);
    } else {
      this.showSearch = true;
      this.searchVisible = true;
    }
  }
}


// public forecasts: WeatherForecast[] = [];
//
// public results$?: Observable<{message: string}>;
//
// constructor(private http: HttpClient) {}
//
// ngOnInit() {
//   this.getForecasts();
// }
//
// getForecasts() {
//   // this.results$ = this.http.get<{message: string}>('http://localhost:5038/api/test-cors')
//   // this.results$ = this.http.get<{message: string}>('http://localhost:5038/api/test-cors')
//   this.results$ = this.http.get<{message: string}>('http://localhost:5038/api/Image')
//   console.log(this.results$.subscribe(data => {console.log(data)}));
// }
//
// title = 'abschlussprojekt.client';
