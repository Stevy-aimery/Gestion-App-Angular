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
  }

  updateEtudiant(updatedEtudiant: Etudiant): Observable<void> {
    const index = this.etudiants.findIndex(e => e.id === updatedEtudiant.id);
    if (index !== -1) {
      this.etudiants[index] = updatedEtudiant;
      this.etudiantsSubject.next([...this.etudiants]);
    }
    return new Observable(observer => observer.complete());
  }

  deleteEtudiant(id: number): Observable<void> {
    this.etudiants = this.etudiants.filter(e => e.id !== id);
    this.etudiantsSubject.next([...this.etudiants]);
    return new Observable(observer => observer.complete());
  }

  getEtudiantsByEtablissement(etablissementId: number): Observable<Etudiant[]> {
    return this.etudiantsSubject.pipe(
      map(etudiants => etudiants.filter(etudiant => etudiant.etablissementId === etablissementId))
    );
  }
}

