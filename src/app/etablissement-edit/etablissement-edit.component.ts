import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Etablissement } from '../models/etablissement.model';
import { EtablissementService } from '../services/etablissement.service';


@Component({
  selector: 'app-etablissement-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './etablissement-edit.component.html',
  styleUrl: './etablissement-edit.component.css'
})
export class EtablissementEditComponent {
  @Input() etablissement: Etablissement | null = null;
  @Output() saveEvent = new EventEmitter<Etablissement>();
  @Output() cancelEvent = new EventEmitter<void>();

  constructor(private etablissementService: EtablissementService) {}

  save(): void {
    if (this.etablissement) {
      this.etablissementService.updateEtablissement(this.etablissement).subscribe(() => {
        this.saveEvent.emit(this.etablissement!);
      });
    }
  }

  cancel(): void {
    this.cancelEvent.emit();
  }
}