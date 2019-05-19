import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs/';
import { catchError } from 'rxjs/operators';

import { Advertising } from './Advertising';


@Injectable({
  providedIn: 'root'
})
export class AdvertisingService {

  private apiRoute = "http://localhost:3000/api/advertising/";

  constructor(private http: HttpClient) { }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error")
  }

  getAdvertisings(): Observable<Advertising[]> {
    console.log("get Advertisings");
    var getData = this.http.get<Advertising[]>(this.apiRoute)
      .pipe(catchError(this.errorHandler));
    return getData
  }


  // getAdvertisings(): Observable<any[]> {
  //   console.log("get Advertisings");
  //   return this.http.get<any[]>(this.apiRoute)
  //     .pipe(catchError(this.errorHandler));
  // }

}
