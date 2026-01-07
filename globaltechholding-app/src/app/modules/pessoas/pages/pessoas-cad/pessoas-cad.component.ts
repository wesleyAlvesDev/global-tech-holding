import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../models/pessoa.model';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarService } from '../../services/snackbar.service';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-pessoas-cad',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    MatSnackBarModule,
    MatIcon
],
  templateUrl: './pessoas-cad.component.html',
  styleUrl: './pessoas-cad.component.scss'
})
export class PessoasCadComponent {
  private fb = inject(FormBuilder);
  private pessoaService = inject(PessoaService);
  private router = inject(Router);
  private snackBarService = inject(SnackBarService);

  form = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
    dataNascimento: ['', [Validators.required]],
    sexo: ['', [Validators.required]],
    altura: ['', [Validators.required, Validators.min(0.5)]],
    peso: ['', [Validators.required, Validators.min(10), Validators.max(300)]]
  });

  sexoOptions = [
    { value: 'M', label: 'Masculino' },
    { value: 'F', label: 'Feminino' }
  ];

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const pessoa: Pessoa = {
      ...this.form.value as unknown as Pessoa
    };

    this.pessoaService.savePessoa(pessoa).subscribe({
      next: () => this.snackBarService.showMessage('Pessoa cadastrada com sucesso'),
      complete: () => this.router.navigate(['/pessoas']),
      error: () => this.snackBarService.showMessage('Erro ao salvar pessoa', true)
    });
  }
}
