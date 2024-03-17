import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {activitiesReducer} from './activities.state';
import {isDevMode} from '@angular/core';
import {Activity} from '../models/activity.model';
import {snackbarReducer} from './snackbar.state';
import {Snackbar} from '../utilities/snackbar';

export interface AppState {
  activities: Activity[];
  snackbar: Snackbar;
}

export const reducers: ActionReducerMap<AppState> = {
  activities: activitiesReducer,
  snackbar: snackbarReducer,
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
