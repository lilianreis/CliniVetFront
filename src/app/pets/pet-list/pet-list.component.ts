import {Component, OnInit} from '@angular/core';
import {Pet} from '../shared/pet';
import {PetService} from '../shared/pet.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmDialogComponent, ConfirmDialogData} from '../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-pet-list',
  standalone: false,
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.scss'
})
export class PetListComponent implements OnInit {
  pets: Pet[] = [];

  constructor(
    private petService: PetService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.petService.getAll().subscribe((pets: Pet[]) => this.pets = pets);
  }

  handleDelete(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: <ConfirmDialogData>{
        title: 'Confirmar Ação',
        message: 'Deseja realmente excluir este pet? Esta ação não pode ser desfeita.',
        confirmText: 'Excluir',
        cancelText: 'Cancelar'
      },
      panelClass: 'custom-dialog-panel'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.petService.delete(id).subscribe(() => {
          this.petService.getAll().subscribe((pets: Pet[]) => this.pets = pets);
        });
      }
    });
  }

  async handleUpdate(id: number): Promise<void> {
    try {
      await this.router.navigate([`/pets/update/${id}`]);
    } catch (error) {
      console.log("Erro ao navegar para update pet: ", error);
    }
  }

  async novoPet(): Promise<void> {
    try {
      await this.router.navigate(['/pets/new']);
    } catch (error) {
      console.log("Erro ao navegar para novo pet: ", error);
    }
  }
}
