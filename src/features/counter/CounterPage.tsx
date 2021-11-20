import React from 'react';
import { decrement, increment, reset } from './store/counter.actions';
import { useAppDispatch, useAppSelector } from '../../app/App.store';

export const CounterPage: React.VFC = () => {

  const dispatch = useAppDispatch();
  const counter = useAppSelector(state => state.counter.value);

  return (
    <div>
      <h1>Counter Page { counter }</h1>
      <button onClick={ () => dispatch(decrement({ value: 1 })) }>-</button>
      <button onClick={ () => dispatch(reset()) }>reset</button>
      <button onClick={ () => dispatch(increment({ value: 1 })) }>+</button>
    </div>
  );
};
