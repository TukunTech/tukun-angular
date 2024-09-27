export class Patient {
  id: string;
  name: string;
  lastName: string;
  dni: string;
  age: number;
  bloodType: string;
  nationality: string;
  noOfPolicies: string;
  insurance: string;
  bedNumber: string;
  allergies: string;
  hr: number;
  nipb:{
    sys: number;
    dia: number;
  }
  spO2: number;
  temp: number;
  constructor() {
    this.id = '';
    this.name = '';
    this.lastName = '';
    this.dni = '';
    this.age = 0;
    this.bloodType = '';
    this.nationality = '';
    this.noOfPolicies = '';
    this.insurance = '';
    this.bedNumber = '';
    this.allergies = '';
    this.hr = 0;
    this.nipb = {
      sys: 0,
      dia: 0
    }
    this.spO2 = 0;
    this.temp = 0;
  }
}
