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
    this.etudiantService.getEtudiants().subscribe(
      etudiants => this.etudiants = etudiants
    );
  }
}

