import {
  createActionGroup,
  createFeatureSelector,
  createReducer,
  emptyProps,
  on,
  props,
} from '@ngrx/store';
import {Activity} from '../models/activity.model';

export const ActivitiesActions = createActionGroup({
  source: 'Activities',
  events: {
    'Add Activity': props<Activity>(),
    'Remove Activity': props<{ActivityId: number}>(),
    'Reset Acivities': emptyProps(),
  },
});

export const initialState: Array<Activity> = [];

export const activitiesReducer = createReducer(
  initialState,
  on(ActivitiesActions.addActivity, (_state, activity: Activity) => [..._state, activity]),
  on(ActivitiesActions.removeActivity, (_state, activity) =>
    _state.filter((a) => a.ActivityId !== activity.ActivityId),
  ),
  on(ActivitiesActions.resetAcivities, (_state) => []),
);

export const selectActivities = createFeatureSelector<ReadonlyArray<Activity>>('activities');
