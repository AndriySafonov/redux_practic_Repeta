import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer} from '@reduxjs/toolkit';
import { createSlice} from '@reduxjs/toolkit';
import { myValueSlice} from './myValue/slice'


// export const increment = createAction('myValue/increment');
// export const decrement = createAction('myValue/decrement');

// const myReducer = createReducer(100, {
//   [increment]: (state, action) => state + action.payload,
//   [decrement]: (state, action) => state - action.payload,
// });
export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
  },
});
