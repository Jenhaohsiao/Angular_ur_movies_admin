import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs/';
import { catchError } from 'rxjs/operators';
import { Advertising } from './advertising.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdvertisingService {

  private apiRoute = `${environment.baseUrl}/api/advertisings`;

  constructor(
    private http: HttpClient
  ) { }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error")
  }

  getAdvertisings(): Observable<Advertising[]> {
    return this.http.get<Advertising[]>(this.apiRoute)
      .pipe(catchError(this.errorHandler));
  }

  getAdvertising(id: string): Observable<Advertising> {
    return this.http.get<Advertising>(`${this.apiRoute}/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  createAdvertising(item: Advertising): Observable<Advertising> {
    return this.http.post<Advertising>(this.apiRoute, item)
      .pipe(catchError(this.errorHandler));
  }

  updateAdvertising(item: Advertising): Observable<Advertising> {
    return this.http.put<Advertising>(`${this.apiRoute}/${item._id}`, item)
      .pipe(catchError(this.errorHandler));
  }
}
