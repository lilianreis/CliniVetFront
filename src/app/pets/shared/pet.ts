export interface Pet {
  id: number;
  name: string;
  tutor: string;
  birthDate: Date;
  isNeutered: boolean;
  breed: string;
  species: string;
  gender: 'Macho' | 'Fêmea';
}
