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
export class BibliaService {

  public apostolos = ["Joao", "Marcos", "Matheus", "Lucas"];
  private baseURL: string = 'https://bible-api.com/';
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private _httpClient: HttpClient,
    private _snackBar: MatSnackBar
  ) { }

  public getApostoloAleatoriamente() {
    return this.apostolos[Math.floor(Math.random()*this.apostolos.length)];
  }

  public getVersiculoBiblia(): Observable<any> {
    let apostolo = this.getApostoloAleatoriamente();
    let primeiroNumeroVersiculo = Math.floor(Math.random() * 5) + 1;
    let segundoNumeroVersiculo = Math.floor(Math.random() * 15) + 1;

    return this._httpClient.get(`${this.baseURL+apostolo+'+10:'+primeiroNumeroVersiculo+'-'+segundoNumeroVersiculo}?translation=almeida`).pipe(
      tap((data: any) => {
        data
    }),
    catchError((error: HttpErrorResponse) => { 
      console.log('error', error);
      return EMPTY; 
    }),
  )}
}
