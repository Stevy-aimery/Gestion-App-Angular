import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EtablissementComponent } from './etablissement/etablissement.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ListeEtudiantEtablissementComponent } from './liste-etudiant-etablissement/liste-etudiant-etablissement.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'etablissement', component: EtablissementComponent },
  { path: 'etudiant', component: EtudiantComponent },
  { path: 'liste-etudiant-etablissement', component: ListeEtudiantEtablissementComponent },
  { path: '**', redirectTo: '' }
];

