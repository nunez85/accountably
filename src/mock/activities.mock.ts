import {Activity} from '../app/models/activity.model';

const act1 = new Activity();
act1.ActivityId = 1;
act1.Description = 'Played guitar';
act1.ActivityType = 'Hobby';
act1.DateStamp = new Date();

const act2 = new Activity();
act2.ActivityId = 2;
act2.Description = 'Studied for math test';
act2.ActivityType = 'Education';
act2.DateStamp = new Date();

const act3 = new Activity();
act3.ActivityId = 3;
act3.Description = 'Worked on report for sales team';
act3.ActivityType = 'Work';
act3.DateStamp = new Date();

const act4 = new Activity();
act4.ActivityId = 4;
act4.Description = 'Ran for 1 mile.';
act4.ActivityType = 'Fitness';
act4.DateStamp = new Date();

export const mockedActivities: Activity[] = [act1, act2, act3, act4];
