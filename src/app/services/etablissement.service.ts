import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
}

