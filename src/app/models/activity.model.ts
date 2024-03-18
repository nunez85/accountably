export class Activity {
  ActivityId: number | null;
  Description: string | null;
  ActivityType: string | null;
  DateStamp: Date | null;
  UserStamp: string | null;

  constructor() {
    this.ActivityId = null;
    this.Description = null;
    this.ActivityType = null;
    this.DateStamp = null;
    this.UserStamp = null;
  }
}
