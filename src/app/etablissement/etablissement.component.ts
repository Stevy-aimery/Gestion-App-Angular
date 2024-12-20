import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EtablissementFormComponent } from '../etablissement-form/etablissement-form.component';
import { EtablissementListComponent } from '../etablissement-list/etablissement-list.component';

@Component({
  selector: 'app-etablissement',
  standalone: true,
  imports: [CommonModule, RouterModule, EtablissementFormComponent, EtablissementListComponent],
  templateUrl:'./etablissement.component.html',
  styleUrls: ['./etablissement.component.css']
})
export class EtablissementComponent {}

