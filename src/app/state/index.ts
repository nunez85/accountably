import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {activitiesReducer} from './activities.reducer';
import {collectionReducer} from './collection.reducer';
import {isDevMode} from '@angular/core';
export interface State {}

export const reducers: ActionReducerMap<State> = {
  activities: activitiesReducer,
  collection: collectionReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
