import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {activitiesReducer} from './activities.state';
import {isDevMode} from '@angular/core';
import {Activity} from '../models/activity.model';
import {snackbarReducer} from './snackbar.state';
import {Snackbar} from '../utilities/snackbar';
import {activityTypeReducer} from './activity-type.state';

export interface AppState {
  activities: Activity[];
  activityType: string;
  snackbar: Snackbar;
}

export const reducers: ActionReducerMap<AppState> = {
  activities: activitiesReducer,
  activityType: activityTypeReducer,
  snackbar: snackbarReducer,
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
