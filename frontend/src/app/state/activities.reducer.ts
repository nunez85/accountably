import {createReducer, on} from '@ngrx/store';

import {Activity} from '../models/activity.model';
import {ActivitiesActions} from './activities.actions';

export const initialState: Array<Activity> = [];

export const activitiesReducer = createReducer(
  initialState,
  on(ActivitiesActions.addActivity, (_state, activity: Activity) => [..._state, activity]),
  on(ActivitiesActions.removeActivity, (_state, activity) =>
    _state.filter((a) => a.ActivityId !== activity.ActivityId),
  ),
  on(ActivitiesActions.resetAcivities, (_state) => []),
);
