import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudiantService } from '../services/etudiant.service';
import { EtablissementService } from '../services/etablissement.service';
import { Etudiant } from '../models/etudiant.model';
import { Etablissement } from '../models/etablissement.model';
import { EtudiantEditComponent } from '../etudiant-edit/etudiant-edit.component';


@Component({
  selector: 'app-etudiant-list',
  standalone: true,
  imports: [CommonModule, EtudiantEditComponent],
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})

export class EtudiantListComponent implements OnInit {
  etudiants: Etudiant[] = [];
  etudiantToEdit: Etudiant | null = null;
  etablissements: Etablissement[] = [];

  constructor(
    private etudiantService: EtudiantService,
    private etablissementService: EtablissementService
  ) {}

  ngOnInit(): void {
    this.loadEtudiants();
    this.loadEtablissements();
  }

  loadEtudiants(): void {
    this.etudiantService.getEtudiants().subscribe(
      etudiants => this.etudiants = etudiants
    );
  }

  loadEtablissements(): void {
    this.etablissementService.getEtablissements().subscribe(
      etablissements => this.etablissements = etablissements
    );
  }

  getEtablissementNom(etablissementId: number): string {
    const etablissement = this.etablissements.find(e => e.id === etablissementId);
    return etablissement ? etablissement.nom : 'Non assigné';
  }

  onEdit(etudiant: Etudiant): void {
    this.etudiantToEdit = { ...etudiant };
  }

  onDelete(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet étudiant ?')) {
      this.etudiantService.deleteEtudiant(id).subscribe(() => {
        this.loadEtudiants();
      });
    }
  }

  onSave(etudiant: Etudiant): void {
    this.loadEtudiants();
    this.etudiantToEdit = null;
  }

  onCancel(): void {
    this.etudiantToEdit = null;
  }
}

