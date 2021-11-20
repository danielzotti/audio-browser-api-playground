import { createReducer } from '@reduxjs/toolkit';
import { decrement, increment, reset } from './counter.actions';

export interface CounterState {
  value: number;
}

export const initialState: CounterState = {
  value: 0
};

export const counterReducer = createReducer<CounterState>(initialState, {
  [increment.type]: (state, { payload: { value } }) => ({ ...state, value: state.value + value }),
  [decrement.type]: (state, { payload: { value } }) => ({ ...state, value: state.value - value }),
  [reset.type]: (state) => ({ ...state, value: initialState.value }),
});
