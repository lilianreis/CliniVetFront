export interface Pet {
  id: number;
  nome: string;
  tutor: string;
  dataNascimento: Date;
  castrado: boolean;
  raca: string;
  especie: string;
  sexo: 'Macho' | 'Fêmea';
}
