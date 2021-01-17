import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Category } from '../category/category';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/categories";

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.path).pipe(
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    if (err.error instanceof ErrorEvent) {
      return throwError('Bir hata oluştu ' + err.error.message);
    } else {
      return throwError("Sistemsel bir hata")
    }
  }

  addCategory(category: Category) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Token"
      })
    }

    return this.http.post<Category>(this.path, category, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}
