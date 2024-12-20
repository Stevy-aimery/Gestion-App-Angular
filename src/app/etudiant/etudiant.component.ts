import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EtudiantFormComponent } from '../etudiant-form/etudiant-form.component';
import { EtudiantListComponent } from '../etudiant-list/etudiant-list.component';

@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [CommonModule, RouterModule, EtudiantFormComponent, EtudiantListComponent],
  templateUrl: './etudiant.component.html',
  styleUrls: ["./etudiant.component.css"],
})
export class EtudiantComponent {}

