import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBak: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false) {
    this.snackBak.open(msg, 'X', {
      duration: 3000,
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

}
