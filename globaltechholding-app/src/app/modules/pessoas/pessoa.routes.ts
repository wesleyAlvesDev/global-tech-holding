import { Routes } from '@angular/router';
import { PessoasListComponent } from './pages/pessoas-list/pessoas-list.component';
import { PessoasCadComponent } from './pages/pessoas-cad/pessoas-cad.component';
import { PessoasEditComponent } from './pages/pessoas-edit/pessoas-edit.component';
import { PessoasViewComponent } from './pages/pessoas-view/pessoas-view.component';

export const pessoaRoutes: Routes = [
  {
    path: '',
    component: PessoasListComponent
  },
  {
    path: 'visualizar/:id',
    component: PessoasViewComponent
  },
  {
    path: 'cadastrar',
    component: PessoasCadComponent
  },
  {
    path: 'editar/:id',
    component: PessoasEditComponent
  }
];
