import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EtudiantParEtablissementComponent } from '../etudiant-par-etablissement/etudiant-par-etablissement.component';

@Component({
  selector: 'app-liste-etudiant-etablissement',
  standalone: true,
  imports: [CommonModule, RouterModule, EtudiantParEtablissementComponent],
  templateUrl: "./liste-etudiant-etablissement.component.html",
  styleUrls: ['liste-etudiant-etablissement.component.css']
})
export class ListeEtudiantEtablissementComponent {}

