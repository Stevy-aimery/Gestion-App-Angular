import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EtablissementService } from '../services/etablissement.service';

@Component({
  selector: 'app-etablissement-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './etablissement-form.component.html',
  styleUrls: ['./etablissement-form.component.css']
})

export class EtablissementFormComponent {
  etablissementForm: FormGroup;
  message: string = '';
  success: boolean = false;

  constructor(
    private fb: FormBuilder,
    private etablissementService: EtablissementService
  ) {
    this.etablissementForm = this.fb.group({
      nom: ['', Validators.required],
      adresse: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.etablissementForm.valid) {
      this.etablissementService.addEtablissement(this.etablissementForm.value);
      this.message = 'Établissement ajouté avec succès !';
      this.success = true;
      this.etablissementForm.reset();
    } else {
      this.message = 'Veuillez remplir tous les champs correctement.';
      this.success = false;
    }
    setTimeout(() => this.message = '', 5000);
  }
}



