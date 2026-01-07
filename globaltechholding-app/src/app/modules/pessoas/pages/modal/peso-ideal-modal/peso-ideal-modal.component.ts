import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-peso-ideal-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './peso-ideal-modal.component.html',
  styleUrl: './peso-ideal-modal.component.scss'
})
export class PesoIdealModalComponent {
  private dialogRef = inject(MatDialogRef<PesoIdealModalComponent>);

  constructor(@Inject(MAT_DIALOG_DATA) public data: { nome: string, pesoIdeal: number }) { }

  close() {
    this.dialogRef.close();
  }
}
