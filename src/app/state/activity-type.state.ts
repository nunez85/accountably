import {createActionGroup, createReducer, on, props} from '@ngrx/store';

export const ActivityTypeActions = createActionGroup({
  source: 'activity type',
  events: {
    'Select Activity Type': props<{activityType: string}>(),
  },
});

const initialState: string = 'All';

export const activityTypeReducer = createReducer(
  initialState,
  on(ActivityTypeActions.selectActivityType, (_state, {activityType}) => activityType),
);
