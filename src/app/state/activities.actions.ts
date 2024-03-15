import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {Activity} from '../models/activity.model';

export const ActivitiesActions = createActionGroup({
  source: 'Activities',
  events: {
    'Add Activity': props<Activity>(),
    'Remove Activity': props<{ActivityId: number}>(),
    'Reset Acivities': emptyProps(),
  },
});
