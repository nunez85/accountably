import {createReducer, on} from '@ngrx/store';

import {Activity} from '../models/activity.model';
import {ActivitiesApiActions} from './activities.actions';

export const initialState: ReadonlyArray<Activity> = [];

export const activitiesReducer = createReducer(
  initialState,
  on(ActivitiesApiActions.retrievedActivityList, (_state, {activities}) => activities),
);
