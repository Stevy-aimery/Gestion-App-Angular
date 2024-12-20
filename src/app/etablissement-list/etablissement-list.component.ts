import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtablissementService } from '../services/etablissement.service';
import { Etablissement } from '../models/etablissement.model';
import { EtablissementEditComponent } from '../etablissement-edit/etablissement-edit.component';

@Component({
  selector: 'app-etablissement-list',
  standalone: true,
  imports: [CommonModule, EtablissementEditComponent],
  templateUrl: './etablissement-list.component.html',
  styleUrls: ['./etablissement-list.component.css']
})

export class EtablissementListComponent implements OnInit {
  etablissements: Etablissement[] = [];
  etablissementToEdit: Etablissement | null = null;

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
    this.etablissementToEdit = { ...etablissement };
  }

  onDelete(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet établissement ?')) {
      this.etablissementService.deleteEtablissement(id).subscribe(() => {
        this.loadEtablissements();
      });
    }
  }

  onSave(etablissement: Etablissement): void {
    this.loadEtablissements();
    this.etablissementToEdit = null;
  }

  onCancel(): void {
    this.etablissementToEdit = null;
  }
}





