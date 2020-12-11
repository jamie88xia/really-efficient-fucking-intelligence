import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import calculatorInputReducer from '../features/calculatorInput/calculatorInputSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    calculatorInput: calculatorInputReducer
  },
});
