import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pet } from './pet';

@Injectable({ providedIn: 'root' })
export class PetService {
  private pets: Pet[] = [
    {
      id: 1,
      nome: 'Rex',
      tutor: 'João',
      dataNascimento: new Date('2020-01-10'),
      castrado: true,
      raca: 'Labrador',
      especie: 'Canina',
      sexo: 'Macho',
    },
    {
      id: 2,
      nome: 'Mimi',
      tutor: 'Ana',
      dataNascimento: new Date('2018-05-22'),
      castrado: false,
      raca: 'Persa',
      especie: 'Felina',
      sexo: 'Fêmea',
    }
  ];

  getPets(): Observable<Pet[]> {
    return of(this.pets);
  }

  deletePet(id: number): void {
    this.pets = this.pets.filter(p => p.id !== id);
  }
}
