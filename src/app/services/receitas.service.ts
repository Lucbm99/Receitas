import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  private baseURL: string = 'https://raw.githubusercontent.com/adrianosferreira/afrodite.json/master/afrodite.json';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private _httpClient: HttpClient,
    private _snackBar: MatSnackBar
  ) { }


  public getReceitas(): Observable<any> {

    return this._httpClient.get(`${this.baseURL}`).pipe(
      tap((data: any) => {
        data
    }),
    catchError((error: HttpErrorResponse) => { 
      console.log('error', error);
      return EMPTY; 
    }),
  )}
}
