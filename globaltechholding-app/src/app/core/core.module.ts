import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts/layouts.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavComponent } from './layouts/nav/nav.component';
import { HeaderComponent } from './layouts/header/header.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule, MatNavList } from '@angular/material/list';
@NgModule({
  declarations: [
    LayoutsComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatSidenavModule,
    MatNavList
],
  exports: [
    FooterComponent,
    NavComponent,
    HeaderComponent,
  ]
})
export class CoreModule { }
