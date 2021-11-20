import { createAction } from '@reduxjs/toolkit';

export const increment = createAction<{ value: number }>('counter/increment');
export const decrement = createAction<{ value: number }>('counter/decrement');
export const reset = createAction('counter/reset');
