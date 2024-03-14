import {createReducer, on} from '@ngrx/store';
import {ActivitiesActions} from './activities.actions';

export const initialState: ReadonlyArray<number> = [];

export const collectionReducer = createReducer(
  initialState,
  on(ActivitiesActions.addActivity, (state, {ActivityId}) => {
    if (state.indexOf(ActivityId) > -1) {
      return state;
    }

    return [...state, ActivityId];
  }),
  on(ActivitiesActions.removeActivity, (state, {ActivityId}) => {
    return state.filter((id) => id !== ActivityId);
  }),
);
