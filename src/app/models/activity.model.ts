export class Activity {
  ActivityId: number | null;
  Description: number | null;
  ActivityTypeId: number | null;
  DateStamp: Date | null;
  UserStamp: string | null;

  constructor() {
    this.ActivityId = null;
    this.Description = null;
    this.ActivityTypeId = null;
    this.DateStamp = null;
    this.UserStamp = null;
  }
}
