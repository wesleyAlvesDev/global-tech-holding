import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasCadComponent } from './pessoas-cad.component';

describe('PessoasCadComponent', () => {
  let component: PessoasCadComponent;
  let fixture: ComponentFixture<PessoasCadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PessoasCadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoasCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
