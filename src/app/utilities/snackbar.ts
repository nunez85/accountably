export type SnackbarType = 'error' | 'success' | 'neutral' | null;

export class Snackbar {
  Title: string | null;
  Message: string | null;
  SnackbarType: SnackbarType;

  constructor(title: string | null, message: string | null, snackbarType: SnackbarType) {
    this.Title = title;
    this.Message = message;
    this.SnackbarType = snackbarType;
  }

  static getDefault(): Snackbar {
    return new Snackbar(null, null, null);
  }
}
