import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';

import {Snackbar} from '../../utilities/snackbar';
import {AppState} from '../../state';
import {SnackbarActions} from '../../state/snackbar.state';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss',
})
export class SnackbarComponent implements OnInit, OnDestroy {
  snackbar: Snackbar;
  subscription!: Subscription;

  constructor(private store: Store<AppState>) {
    this.snackbar = Snackbar.getDefault();
  }

  ngOnInit(): void {
    this.subscription = this.store.select('snackbar').subscribe((snackbar: Snackbar) => {
      if (!snackbar.Message) return;
      this.snackbar = snackbar;
      this.store.dispatch(SnackbarActions.resetSnackbar());
      let htmlElement = document.getElementById('snackbar');
      if (htmlElement) {
        let className = `show ${snackbar.SnackbarType}`;
        htmlElement.className = className;
        setTimeout(function () {
          if (htmlElement) {
            htmlElement.className = htmlElement.className.replace(className, '');
          }
        }, 3000);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
