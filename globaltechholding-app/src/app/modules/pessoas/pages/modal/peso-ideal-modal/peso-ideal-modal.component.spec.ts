import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesoIdealModalComponent } from './peso-ideal-modal.component';

describe('PesoIdealModalComponent', () => {
  let component: PesoIdealModalComponent;
  let fixture: ComponentFixture<PesoIdealModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PesoIdealModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesoIdealModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
