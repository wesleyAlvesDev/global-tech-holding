import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pessoas',
    pathMatch: 'full'
  },
  {
    path: 'pessoas',
    loadChildren: () =>
      import('./modules/pessoas/pessoa.routes')
        .then(m => m.pessoaRoutes)
  }
];
