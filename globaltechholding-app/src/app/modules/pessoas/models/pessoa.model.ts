export interface Pessoa {
  id: number;
  nome: string;
  cpf: string;
  dataNascimento: string;
  sexo: 'M' | 'F';
  altura: number;
  peso: number;
}
