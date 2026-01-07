import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private http = inject(HttpClient);

  private readonly apiUrl = `${environment.apiUrl}/pessoas`

  getPessoas(pageIndex: number, pageSize: number): Observable<any> {
    const params = new HttpParams()
      .append('page', pageIndex)
      .append('size', pageSize)
      .set('sort', 'id,DESC');

    return this.http.get(this.apiUrl, { params });
  }

  savePessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.apiUrl, pessoa);
  }

  updatePessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(`${this.apiUrl}/${pessoa.id}`, pessoa);
  }

  getPessoaById(id: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(`${this.apiUrl}/${id}`);
  }

  deletePessoa(id: number): Observable<Pessoa> {
    return this.http.delete<Pessoa>(`${this.apiUrl}/${id}`);
  }

  getPesoIdeal(id: any): Observable<Number> {
    return this.http.get<Number>(`${this.apiUrl}/calcular-peso-ideal/${id}`);
  }
}
