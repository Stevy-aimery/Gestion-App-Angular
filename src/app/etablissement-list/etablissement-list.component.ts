import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtablissementService } from '../services/etablissement.service';
import { Etablissement } from '../models/etablissement.model';

@Component({
  selector: 'app-etablissement-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './etablissement-list.component.html',
  styleUrls: ['./etablissement-list.component.css']
})

export class EtablissementListComponent implements OnInit {
  etablissements: Etablissement[] = [];

  constructor(private etablissementService: EtablissementService) {}

  ngOnInit(): void {
    this.loadEtablissements();
  }

  loadEtablissements(): void {
    this.etablissementService.getEtablissements().subscribe(
      etablissements => this.etablissements = etablissements
    );
  }

  onEdit(etablissement: Etablissement): void {
    // TODO: Implement edit functionality
    console.log('Edit etablissement:', etablissement);
  }

  onDelete(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet établissement ?')) {
      this.etablissementService.deleteEtablissement(id).subscribe(() => {
        this.loadEtablissements();
      });
    }
  }
}


