import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EtudiantService } from '../services/etudiant.service';
import { EtablissementService } from '../services/etablissement.service';
import { Etablissement } from '../models/etablissement.model';

@Component({
  selector: 'app-etudiant-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './etudiant-form.component.html',
  styleUrls: ['./etudiant-form.component.css']
})

export class EtudiantFormComponent implements OnInit {
  etudiantForm: FormGroup;
  etablissements: Etablissement[] = [];
  message: string = '';
  success: boolean = false;

  constructor(
    private fb: FormBuilder,
    private etudiantService: EtudiantService,
    private etablissementService: EtablissementService
  ) {
    this.etudiantForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      etablissementId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.etablissementService.getEtablissements().subscribe(
      etablissements => this.etablissements = etablissements
    );
  }

  onSubmit(): void {
    if (this.etudiantForm.valid) {
      const etudiant = this.etudiantForm.value;
      etudiant.etablissementId = parseInt(etudiant.etablissementId, 10);
      this.etudiantService.addEtudiant(etudiant);
      this.message = 'Étudiant ajouté avec succès !';
      this.success = true;
      this.etudiantForm.reset();
    } else {
      this.message = 'Veuillez remplir tous les champs correctement.';
      this.success = false;
    }
    setTimeout(() => this.message = '', 5000);
  }
}

