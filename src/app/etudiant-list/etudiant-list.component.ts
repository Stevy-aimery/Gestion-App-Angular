import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudiantService } from '../services/etudiant.service';
import { Etudiant } from '../models/etudiant.model';

@Component({
  selector: 'app-etudiant-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})

export class EtudiantListComponent implements OnInit {
  etudiants: Etudiant[] = [];

  constructor(private etudiantService: EtudiantService) {}

  ngOnInit(): void {
    this.loadEtudiants();
  }

  loadEtudiants(): void {
    this.etudiantService.getEtudiants().subscribe(
      etudiants => this.etudiants = etudiants
    );
  }

  getEtablissementNom(etablissementId: number): string {
    // TODO: Implement this method to return the establishment name
    return 'Nom de l\'établissement';
  }

  onEdit(etudiant: Etudiant): void {
    // TODO: Implement edit functionality
    console.log('Edit etudiant:', etudiant);
  }

  onDelete(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet étudiant ?')) {
      this.etudiantService.deleteEtudiant(id).subscribe(() => {
        this.loadEtudiants();
      });
    }
  }
}

