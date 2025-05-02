import {Component, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {Pet} from '../shared/pet';

@Component({
  selector: 'app-pet-list-item',
  standalone: false,
  templateUrl: './pet-list-item.component.html',
  styleUrl: './pet-list-item.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class PetListItemComponent {
  @Input() pet!: Pet;
  @Output() onDelete = new EventEmitter<number>();
  @Output() onUpdate = new EventEmitter<number>();

  getEspecieImage(especie: string): string {
    switch (especie.toLowerCase()) {
      case 'canina': return 'assets/icons/cao.png';
      case 'felina': return 'assets/icons/gato.png';
      case 'ave': return 'assets/icons/ave.png';
      default: return 'assets/icons/pet.png';
    }
  }

  deletePet() {
    this.onDelete.emit(this.pet.id);
  }

  updatePet() {
    this.onUpdate.emit(this.pet.id);
  }
}
