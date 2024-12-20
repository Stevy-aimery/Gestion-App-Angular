import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantParEtablissementComponent } from './etudiant-par-etablissement.component';

describe('EtudiantParEtablissementComponent', () => {
  let component: EtudiantParEtablissementComponent;
  let fixture: ComponentFixture<EtudiantParEtablissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtudiantParEtablissementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantParEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
