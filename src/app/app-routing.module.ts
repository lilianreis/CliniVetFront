import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PetListComponent} from './pets/pet-list/pet-list.component';

const routes: Routes = [
  {path: "", component: PetListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
