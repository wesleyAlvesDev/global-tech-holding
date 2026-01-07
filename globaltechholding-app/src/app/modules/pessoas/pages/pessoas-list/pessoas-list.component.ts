import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../models/pessoa.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from "@angular/router";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDeleteModalComponent } from '../modal/confirm-delete-modal/confirm-delete-modal.component';
import { SnackBarService } from '../../services/snackbar.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DateFormatPipe } from '../../../../core/pipes/date-format.pipe';
import { CpfFormatPipe } from '../../../../core/pipes/cpf-format.pipe';
@Component({
  selector: 'app-pessoas-list',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginator,
    MatDialogModule,
    MatPaginatorModule,
    DateFormatPipe,
    CpfFormatPipe 
  ],
  templateUrl: './pessoas-list.component.html',
  styleUrl: './pessoas-list.component.scss'
})
export class PessoasListComponent implements OnInit, AfterViewInit {

  private dialog = inject(MatDialog);
  private router = inject(Router);
  private pessoaService = inject(PessoaService);
  private snackBarService = inject(SnackBarService);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  
  totalItems: number = 0;
  pageSize: number =  10;
  pageIndex: number =  0;

  dataSource: MatTableDataSource<Pessoa> = new MatTableDataSource<Pessoa>();

  displayedColumns: string[] = [
    'id',
    'nome',
    'cpf',
    'dataNascimento',
    'sexo',
    'altura',
    'peso',
    'action'
  ];
  

  ngOnInit(): void {
    this.getPessoas();
  }

  ngAfterViewInit(): void {
    this.paginator.length = this.totalItems

    this.paginator.page.subscribe((event) => {
      this.pageIndex = event.pageIndex;
      this.pageSize = event.pageSize;
      this.getPessoas();
    });
  }

  getPessoas(): void {
    this.pessoaService.getPessoas(this.pageIndex, this.pageSize).subscribe({
      next: (value) => {
        this.dataSource = new MatTableDataSource<Pessoa>(value.content);
        this.totalItems = value.totalElements;
      },
      error: (err) => {
        console.error('Erro ao carregar pessoas', err);
      }
    });
  }

  deletePessoa(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDeleteModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.pessoaService.deletePessoa(id).subscribe(() => {
          this.dataSource.data = this.dataSource.data.filter(p => p.id !== id);
          this.snackBarService.showMessage('Pessoa excluida com sucesso')
        });
      }
    });
  }

  navigate(router: string): void {
    this.router.navigate([router]);
  }
}
