import {createFeatureSelector} from '@ngrx/store';
import {Activity} from '../models/activity.model';

export const selectActivities = createFeatureSelector<ReadonlyArray<Activity>>('activities');
