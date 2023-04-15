import { createSelector, createSlice } from '@reduxjs/toolkit';

interface ExerciseState {
  count: number;
}

const initialState: ExerciseState = {
  count: 0,
};

const exerciseSlice = createSlice({
  name: 'exercise',
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
  },
});

export const exerciseActions = exerciseSlice.actions;

export const exerciseSelector = (state: { exercise: ExerciseState }) =>
  state.exercise;

export const countSelector = createSelector(exerciseSelector, (x) => x.count);

export const isEvenSelector = createSelector(
  exerciseSelector,
  (x) => x.count % 2 === 0
);
