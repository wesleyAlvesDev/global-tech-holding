import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasViewComponent } from './pessoas-view.component';

describe('PessoasViewComponent', () => {
  let component: PessoasViewComponent;
  let fixture: ComponentFixture<PessoasViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PessoasViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
