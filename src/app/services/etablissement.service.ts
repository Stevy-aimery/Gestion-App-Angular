import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Etablissement } from '../models/etablissement.model';

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {
  private etablissements: Etablissement[] = [];
  private etablissementsSubject = new BehaviorSubject<Etablissement[]>([]);

  constructor() {}

  getEtablissements(): Observable<Etablissement[]> {
    return this.etablissementsSubject.asObservable();
  }

  addEtablissement(etablissement: Etablissement): void {
    etablissement.id = this.etablissements.length + 1;
    this.etablissements.push(etablissement);
    this.etablissementsSubject.next([...this.etablissements]);
  }

  updateEtablissement(updatedEtablissement: Etablissement): Observable<void> {
    const index = this.etablissements.findIndex(e => e.id === updatedEtablissement.id);
    if (index !== -1) {
      this.etablissements[index] = updatedEtablissement;
      this.etablissementsSubject.next([...this.etablissements]);
    }
    return new Observable(observer => observer.complete());
  }

  deleteEtablissement(id: number): Observable<void> {
    this.etablissements = this.etablissements.filter(e => e.id !== id);
    this.etablissementsSubject.next([...this.etablissements]);
    return new Observable(observer => observer.complete());
  }

  getEtablissementById(id: number): Observable<Etablissement | undefined> {
    return this.etablissementsSubject.pipe(
      map(etablissements => etablissements.find(e => e.id === id))
    );
  }
}

