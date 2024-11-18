import {Status} from "./status";

export class PendingMedicine {
  id?: number;
  medicineName?: string;
  status?: Status;
  dosage?: string;
  timeToTake?: Date;

  constructor(id: number, medicineName: string, status: Status, dosage: string) {

    this.id = id;
    this.medicineName = medicineName;
    this.status = status;
    this.dosage = dosage;

  }


}
