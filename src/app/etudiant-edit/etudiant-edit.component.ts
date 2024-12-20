import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Etudiant } from '../models/etudiant.model';
import { Etablissement } from '../models/etablissement.model';
import { EtudiantService } from '../services/etudiant.service';
import { EtablissementService } from '../services/etablissement.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-etudiant-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './etudiant-edit.component.html',
  styleUrl: './etudiant-edit.component.css'
})

export class EtudiantEditComponent implements OnInit, OnChanges {
  @Input() etudiant: Etudiant | null = null;
  @Output() saveEvent = new EventEmitter<Etudiant>();
  @Output() cancelEvent = new EventEmitter<void>();

  etablissements: Etablissement[] = [];
  etudiantForm: FormGroup;

  constructor(
    private etudiantService: EtudiantService,
    private etablissementService: EtablissementService,
    private fb: FormBuilder
  ) {
    // Initialize the form in the constructor
    this.etudiantForm = this.fb.group({
      id: [null],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(0)]],
      etablissementId: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.etablissementService.getEtablissements().subscribe(
      etablissements => {
        this.etablissements = etablissements;
        this.initForm();
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['etudiant'] && this.etudiant) {
      this.initForm();
    }
  }

  initForm(): void {
    if (this.etudiant) {
      this.etudiantForm.patchValue({
        id: this.etudiant.id,
        nom: this.etudiant.nom,
        prenom: this.etudiant.prenom,
        age: this.etudiant.age,
        etablissementId: this.etudiant.etablissementId
      });
    } else {
      this.etudiantForm.reset();
    }
  }

  save(): void {
    if (this.etudiantForm.valid) {
      const updatedEtudiant: Etudiant = {
        ...this.etudiantForm.value,
        etablissementId: +this.etudiantForm.value.etablissementId
      };
      this.etudiantService.updateEtudiant(updatedEtudiant).subscribe(() => {
        this.saveEvent.emit(updatedEtudiant);
      });
    }
  }

  cancel(): void {
    this.cancelEvent.emit();
  }
}

