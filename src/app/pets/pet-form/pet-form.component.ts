import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-pet-form',
  standalone: false,
  templateUrl: './pet-form.component.html',
  styleUrl: './pet-form.component.scss'
})
export class PetFormComponent {
  petForm: FormGroup;
  especies = ['Canina', 'Felina', 'Ave', 'Outra'];
  sexos = ['Macho', 'Fêmea'];

  constructor(private fb: FormBuilder) {
    this.petForm = this.fb.group({
      nome: ['', Validators.required],
      tutor: ['', Validators.required],
      dataNascimento: [null, Validators.required],
      castrado: [false],
      raca: [''],
      especie: ['', Validators.required],
      sexo: ['', Validators.required]
    });
  }

  onSubmit() {
    if (!this.petForm.value.raca) {
      this.petForm.patchValue({ raca: 'RND' });
    }

    if (this.petForm.valid) {
      console.log('Dados do pet:', this.petForm.value);
      // Aqui você pode enviar para um backend ou serviço
    }
  }
}
