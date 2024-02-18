export interface Description {
  id: number;
  age: number;
  height: number;
  weight: number;
  cupSize: number;
  hairColor: number;
  typeFigure: number;
}

export interface Contact {
  id: number;
  uuid: string;
  firstName: string;
  phone: string;
  city: string;
  about: string;
  rating: number;
  isActive: number;
  description: Description;
}