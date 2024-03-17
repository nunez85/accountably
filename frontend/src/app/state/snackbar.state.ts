import {createActionGroup, createReducer, emptyProps, on, props} from '@ngrx/store';
import {Snackbar} from '../utilities/snackbar';

export const SnackbarActions = createActionGroup({
  source: 'Snackbar',
  events: {
    'Show Snackbar': props<{title: string; message: string}>(),
    'Show Error Snackbar': props<{title: string; message: string}>(),
    'Show Success Snackbar': props<{title: string; message: string}>(),
    'Reset Snackbar': emptyProps(),
  },
});

const initialState: Snackbar = Snackbar.getDefault();

export const snackbarReducer = createReducer(
  initialState,
  on(
    SnackbarActions.showSnackbar,
    (state, {title, message}) => new Snackbar(title, message, 'neutral'),
  ),
  on(
    SnackbarActions.showErrorSnackbar,
    (state, {title, message}) => new Snackbar(title, message, 'error'),
  ),
  on(
    SnackbarActions.showSuccessSnackbar,
    (state, {title, message}) => new Snackbar(title, message, 'success'),
  ),
  on(SnackbarActions.resetSnackbar, () => Snackbar.getDefault()),
);
