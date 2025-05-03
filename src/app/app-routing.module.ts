import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PetListComponent} from './pets/pet-list/pet-list.component';
import {PetFormComponent} from './pets/pet-form/pet-form.component';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "pets", component: PetListComponent},
  {path: "pets/new", component: PetFormComponent},
  {path: "pets/update/:id", component: PetFormComponent},
  {path: "", redirectTo: "/pets", pathMatch: "full"},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
