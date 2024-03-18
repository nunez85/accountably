import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../state';
import {SnackbarActions} from '../state/snackbar.state';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private store: Store<AppState>) {}

  error(title: string, message: string): void {
    this.store.dispatch(SnackbarActions.showErrorSnackbar({title, message}));
  }
  info(title: string, message: string): void {
    this.store.dispatch(SnackbarActions.showSnackbar({title, message}));
  }
  success(title: string, message: string): void {
    this.store.dispatch(SnackbarActions.showSuccessSnackbar({title, message}));
  }
}
