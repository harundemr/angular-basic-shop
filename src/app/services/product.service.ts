import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/products";

  getProduct(categoryId?: number): Observable<Product[]> {
    let newPath = this.path;
    if (categoryId && categoryId != 0) {
      newPath += "?categoryId=" + categoryId
    }
    return this.http.get<Product[]>(newPath).pipe(
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

  addProduct(product: Product): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Token"
      })
    }
    return this.http.post<Product>(this.path, product, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}
