import {Component, OnInit} from '@angular/core';
import { Pet } from '../shared/pet';
import {PetService} from '../shared/pet.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pet-list',
  standalone: false,
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.scss'
})
export class PetListComponent implements OnInit {
  pets: Pet[] = [];

  constructor(private petService: PetService, private router: Router) {}

  ngOnInit(): void {
    this.petService.getAll().subscribe((pets: Pet[]) => this.pets = pets);
  }

  handleDelete(id: number): void {
    this.petService.delete(id);
    this.pets = this.pets.filter(p => p.id !== id);
  }

  handleUpdate(id: number): void {
    // Exemplo de navegação para update
    console.log('Atualizar pet:', id);
  }

  async novoPet() {
    try{
      await this.router.navigate(['/pets/new']);
    } catch (error) {
      console.log("Erro ao navegar para novo pet: ", error);
    }
  }
}
