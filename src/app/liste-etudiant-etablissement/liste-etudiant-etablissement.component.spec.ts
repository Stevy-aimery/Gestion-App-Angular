import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEtudiantEtablissementComponent } from './liste-etudiant-etablissement.component';

describe('ListeEtudiantEtablissementComponent', () => {
  let component: ListeEtudiantEtablissementComponent;
  let fixture: ComponentFixture<ListeEtudiantEtablissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeEtudiantEtablissementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeEtudiantEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
