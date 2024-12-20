import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Etudiant } from '../models/etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private etudiants: Etudiant[] = [];
  private etudiantsSubject = new BehaviorSubject<Etudiant[]>([]);

  constructor() {}

  getEtudiants(): Observable<Etudiant[]> {
    return this.etudiantsSubject.asObservable();
  }

  addEtudiant(etudiant: Etudiant): void {
    etudiant.id = this.etudiants.length + 1;
    this.etudiants.push(etudiant);
    this.etudiantsSubject.next([...this.etudiants]);
    console.log('Étudiant ajouté:', etudiant);
    console.log('Liste des étudiants:', this.etudiants);
  }

  getEtudiantsByEtablissement(etablissementId: number): Observable<Etudiant[]> {
    return this.etudiantsSubject.pipe(
      map(etudiants => {
        const filteredEtudiants = etudiants.filter(etudiant => etudiant.etablissementId === etablissementId);
        console.log(`Étudiants pour l'établissement ${etablissementId}:`, filteredEtudiants);
        return filteredEtudiants;
      })
    );
  }
}

