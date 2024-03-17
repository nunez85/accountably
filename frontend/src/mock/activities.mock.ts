import {Activity} from '../app/models/activity.model';

const act1 = new Activity();
act1.ActivityId = 1;
act1.Description = 'Test 1';
act1.ActivityType = 'Hobby';
act1.DateStamp = new Date();

const act2 = new Activity();
act2.ActivityId = 2;
act2.Description = 'Test 2';
act2.ActivityType = 'Education';
act2.DateStamp = new Date();

const act3 = new Activity();
act3.ActivityId = 3;
act3.Description = 'Test 3';
act3.ActivityType = 'Hobby';
act3.DateStamp = new Date();
export const mockedActivities: Activity[] = [act1, act2, act3];
