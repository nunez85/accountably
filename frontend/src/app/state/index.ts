import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {activitiesReducer} from './activities.reducer';
import {isDevMode} from '@angular/core';
import {Activity} from '../models/activity.model';

export interface AppState {
  activities: Activity[];
}

export const reducers: ActionReducerMap<AppState> = {
  activities: activitiesReducer,
};

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
