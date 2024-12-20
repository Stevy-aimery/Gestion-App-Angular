import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EtudiantService } from '../services/etudiant.service';
import { EtablissementService } from '../services/etablissement.service';

import { Etudiant } from '../models/etudiant.model';
import { Etablissement } from '../models/etablissement.model';

@Component({
  selector: 'app-etudiant-par-etablissement',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './etudiant-par-etablissement.component.html',
  styleUrls: ['./etudiant-par-etablissement.component.css']
})

export class EtudiantParEtablissementComponent implements OnInit {
  etablissements: Etablissement[] = [];
  etudiants: Etudiant[] = [];
  selectedEtablissementId: number | null = null;

  constructor(
    private etudiantService: EtudiantService,
    private etablissementService: EtablissementService
  ) {}

  ngOnInit(): void {
    this.etablissementService.getEtablissements().subscribe(
      etablissements => this.etablissements = etablissements
    );
    this.loadAllEtudiants();
  }

  loadAllEtudiants(): void {
    this.etudiantService.getEtudiants().subscribe(
      etudiants => {
        this.etudiants = etudiants;
        console.log('Tous les étudiants chargés:', this.etudiants);
      }
    );
  }

  onEtablissementChange(etablissementId: string): void {
    const id = parseInt(etablissementId, 10);
    if (!isNaN(id)) {
      this.selectedEtablissementId = id;
      this.etudiantService.getEtudiantsByEtablissement(id).subscribe(
        etudiants => {
          this.etudiants = etudiants;
          console.log(`Étudiants pour l'établissement ${id}:`, this.etudiants);
        }
      );
    } else {
      this.selectedEtablissementId = null;
      this.loadAllEtudiants();
    }
  }
}

