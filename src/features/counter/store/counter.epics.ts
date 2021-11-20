import { Epic, ofType } from 'redux-observable';
import { ignoreElements, tap } from 'rxjs';
import { increment } from './counter.actions';

export const incrementEpic: Epic = action$ => action$.pipe(
  ofType(increment.type),
  tap(({ type, payload }) => console.log('This log is triggered only by increment action thanks to epics :)')),
  ignoreElements() // This line prevents loop
);


export const counterEpics = [incrementEpic];
