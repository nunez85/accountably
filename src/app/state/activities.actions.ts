import {createActionGroup, props} from '@ngrx/store';
import {Activity} from '../models/activity.model';

export const ActivitiesActions = createActionGroup({
  source: 'Activities',
  events: {
    'Add Activity': props<{ActivityId: number}>(),
    'Remove Activity': props<{ActivityId: number}>(),
  },
});

export const ActivitiesApiActions = createActionGroup({
  source: 'Activities API',
  events: {
    'Retrieved Activity List': props<{activities: ReadonlyArray<Activity>}>(),
  },
});
