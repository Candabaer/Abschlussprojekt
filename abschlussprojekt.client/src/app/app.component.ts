import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import { MatSidenavModule } from '@angular/material/sidenav';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: false
})
export class AppComponent implements OnInit {

    ngOnInit(): void {

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
