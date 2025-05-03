import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from './material.module';

import {PetListComponent} from './pets/pet-list/pet-list.component';
import {PetListItemComponent} from './pets/pet-list-item/pet-list-item.component';
import {PetFormComponent} from './pets/pet-form/pet-form.component';

import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MatRipple} from '@angular/material/core';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PetListComponent,
    PetListItemComponent,
    PetFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    MatRipple,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    { provide: DateAdapter, useClass: MomentDateAdapter },
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: 'DD/MM/YYYY',
        },
        display: {
          dateInput: 'DD/MM/YYYY',
          monthYearLabel: 'MMM YYYY',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY'
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
