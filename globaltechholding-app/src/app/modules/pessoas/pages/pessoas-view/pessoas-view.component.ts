import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { PessoaService } from '../../services/pessoa.service';
import { SnackBarService } from '../../services/snackbar.service';
import { Pessoa } from '../../models/pessoa.model';
import { PesoIdealModalComponent } from '../modal/peso-ideal-modal/peso-ideal-modal.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-pessoas-view',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    RouterModule, MatIcon],
  templateUrl: './pessoas-view.component.html',
  styleUrl: './pessoas-view.component.scss'
})
export class PessoasViewComponent {

  private fb = inject(FormBuilder);
  private pessoaService = inject(PessoaService);
  private route = inject(ActivatedRoute);
  private dialog = inject(MatDialog);

  form = this.fb.group({
    id: [''],
    nome: ['', [Validators.required, Validators.minLength(3)]],
    cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
    dataNascimento: ['', [Validators.required]],
    sexo: ['', [Validators.required]],
    altura: ['', [Validators.required, Validators.min(0.5), Validators.max(2.5)]],
    peso: ['', [Validators.required, Validators.min(10), Validators.max(300)]]
  });

  sexoOptions = [
    { value: 'M', label: 'Masculino' },
    { value: 'F', label: 'Feminino' }
  ];

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.pessoaService.getPessoaById(id).subscribe(pessoa => {
      this.form.patchValue({
        id: String(pessoa.id),
        nome: pessoa.nome,
        cpf: pessoa.cpf,
        dataNascimento: pessoa.dataNascimento,
        sexo: pessoa.sexo,
        altura: String(pessoa.altura),
        peso: String(pessoa.peso)
      });

      this.form.disable();
    });
  }

  getPesoIdeal(): void {
    const pessoa: Pessoa = {
      ...this.form.value as unknown as Pessoa
    };

    this.pessoaService.getPesoIdeal(pessoa.id).subscribe({
      next: (peso) => {
        this.dialog.open(PesoIdealModalComponent, {
          data: {
            nome: pessoa.nome,
            pesoIdeal: peso
          },
          width: '350px'
        });
      },
      error: err => console.error('Erro ao calcular peso ideal', err)
    });
  }
}
