import { configureStore } from '@reduxjs/toolkit';
import calculatorInputReducer from '../features/calculatorInput/calculatorInputSlice';

export default configureStore({
  reducer: {
    calculatorInput: calculatorInputReducer
  },
});
