import {Status} from "./status";

class Elder {
}

export class PendingMedicine {
  id?: number;
  medicineName?: string;
  status?: Status;
  dosage?: string;
  timeToTake?: Date;
  elder?: Elder;

  constructor(id: number, medicineName: string, status: Status, dosage: string, timeToTake: Date, elder: Elder) {

    this.id = id;
    this.medicineName = medicineName;
    this.status = status;
    this.dosage = dosage;
    this.timeToTake = timeToTake;
    this.elder = elder;

  }


}
