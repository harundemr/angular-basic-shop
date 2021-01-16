import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { isDefined } from '@angular/compiler/src/util';
@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/products";

  getProduct(categoryId?: number): Observable<Product[]> {
    let newPath = this.path;
    if (categoryId) {
      newPath += "?categoryId=" + categoryId
    }
    return this.http.get<Product[]>(newPath).pipe(
      tap(data => console.log(JSON.stringify(data))),
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
}
