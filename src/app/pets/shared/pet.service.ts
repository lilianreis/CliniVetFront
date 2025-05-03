import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Pet} from './pet';
import {HttpClient} from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PetService {
  private http = inject(HttpClient);

  private readonly API_URL = 'http://localhost:8080/pet';

  getAll(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.API_URL);
  }

  getById(id: number): Observable<Pet> {
    return this.http.get<Pet>(`${this.API_URL}/${id}`);
  }

  create(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.API_URL, pet);
  }

  update(pet: Pet): Observable<Pet> {
    return this.http.put<Pet>(`${this.API_URL}/${pet.id}`, pet);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }
}
