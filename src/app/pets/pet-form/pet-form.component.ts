import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PetService} from '../shared/pet.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Pet} from '../shared/pet';

@Component({
  selector: 'app-pet-form',
  standalone: false,
  templateUrl: './pet-form.component.html',
  styleUrl: './pet-form.component.scss'
})
export class PetFormComponent implements OnInit {
  petForm!: FormGroup;
  petId?: number;

  species: String[] = ['Canina', 'Felina', 'Ave', 'Outra'];
  genders: String[] = ['Macho', 'Fêmea'];

  constructor(
    private fb: FormBuilder,
    private petService: PetService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.petForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      tutor: ['', Validators.required],
      birthDate: [null, Validators.required],
      isNeutered: [false],
      breed: [''],
      species: ['', Validators.required],
      gender: ['', Validators.required]
    });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.petId = +id;
        this.petService.getById(this.petId).subscribe(pet => {
          this.petForm.patchValue(pet);
        });
      }
    })
  }

  savePet(): void {
    const pet: Pet = this.petForm.value;

    if (pet.id) {
      this.petService.update(pet).subscribe({
        next: () => this.router.navigate(['/pets']),
        error: err => console.error('Erro ao atualizar pet: ', err)
      });
    } else {
      this.petService.create(pet).subscribe({
        next: () => this.router.navigate(['/pets']),
        error: err => console.error('Erro ao criar pet: ', err)
      });
    }
  }

  async cancel(): Promise<void> {
    await this.router.navigate(['/pets']);
  }
}
