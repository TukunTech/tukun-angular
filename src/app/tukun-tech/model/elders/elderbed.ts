import { Elder } from "./elder.entity";

export class ElderBed {
  id: number;
  hrBpm: number;
  systolic: number;
  dia: number;
  spo2: number;
  temperature: number;
  elder: Elder;

  constructor(
    id: number,
    hrBpm: number,
    systolic: number,
    dia: number,
    spo2: number,
    temperature: number,
    elder: Elder
  ) {
    this.id = id;
    this.hrBpm = hrBpm;
    this.systolic = systolic;
    this.dia = dia;
    this.spo2 = spo2;
    this.temperature = temperature;
    this.elder = elder;
  }
}
