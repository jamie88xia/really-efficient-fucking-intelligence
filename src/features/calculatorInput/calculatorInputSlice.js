import { createSlice } from '@reduxjs/toolkit';
import { calculateMonthlyPayments } from '../calculatorUtils/calculator';

export const calculatorInputSlice = createSlice({
  name: 'calculatorInput',
  initialState: {
    homePrice: 300000, // current loan info
    downPaymentAmount: 60000, // current loan info 
    downPaymentPct: 20, // current loan info
    lengthOfLoan: '30 Years', // current loan info
    interestRate: 5, // current loan info
    initialPrinciple: 240000, // current loan info
    currMonthlyPandI: 1288.00,
    // todo we also need loan start month/year to calculate remaining months

    newEstimatedHomeValue: 320000, // refi terms info
    newLoanAmount: 240000, // refi terms info
    newLengthOfLoan: '30 Years', // refi terms info
    newInterestRate: 3, // refi terms info
    newMonthlyPandI: 1011.00,
    cashToClose: 5000
  },
  reducers: {
    // curr loan reducers
    setHomePrice: (state, action) => {
      state.homePrice = action.payload;
      state.downPaymentPct = state.downPaymentAmount / action.payload * 100; // todo round
      state.initialPrinciple = state.homePrice - state.downPaymentAmount;
    },
    setDownPaymentAmount: (state, action) => {
      // todo constraints: must be less than homeprice
      state.downPaymentAmount = action.payload;
      state.downPaymentPct = action.payload / state.homePrice * 100; // todo round
      state.initialPrinciple = state.homePrice - state.downPaymentAmount;
      state.currMonthlyPandI = calculateMonthlyPayments(state.interestRate, state.initialPrinciple, state.lengthOfLoan);
    },
    setDownPaymentPct: (state, action) => {
      // todo constraints: must be less than homeprice (when converted to $)
      state.downPaymentPct = action.payload;
      state.downPaymentAmount = state.homePrice * action.payload / 100; // todo round
      state.initialPrinciple = state.homePrice - state.downPaymentAmount;
      state.currMonthlyPandI = calculateMonthlyPayments(state.interestRate, state.initialPrinciple, state.lengthOfLoan);
      // todo this should update refi monthly p+i
    },
    setLengthOfLoan: (state, action) => {
      state.lengthOfLoan = action.payload;
      state.currMonthlyPandI = calculateMonthlyPayments(state.interestRate, state.initialPrinciple, state.lengthOfLoan);
    },
    setInterestRate: (state, action) => {
      state.interestRate = action.payload;
      state.currMonthlyPandI = calculateMonthlyPayments(state.interestRate, state.initialPrinciple, state.lengthOfLoan);
    },

    // refi loan reducers
    setNewEstimatedHomeValue: (state, action) => {
      state.newEstimatedHomeValue = action.payload;
      // todo this should update refi monthly p+i
    },
    setNewLoanAmount: (state, action) => {
      // todo constraits: must be less than initialPrinciple
      state.newLoanAmount = action.payload;
      state.newMonthlyPandI = calculateMonthlyPayments(state.newInterestRate, state.newLoanAmount, state.newLengthOfLoan);
    },
    setNewLengthOfLoan: (state, action) => {
      state.newLengthOfLoan = action.payload;
      state.newMonthlyPandI = calculateMonthlyPayments(state.newInterestRate, state.newLoanAmount, state.newLengthOfLoan);
    },
    setNewInterestRate: (state, action) => {
      state.newInterestRate = action.payload;
      state.newMonthlyPandI = calculateMonthlyPayments(state.newInterestRate, state.newLoanAmount, state.newLengthOfLoan);
    },
  },
});

export const { 
  setHomePrice, 
  setDownPaymentAmount, 
  setDownPaymentPct, 
  setLengthOfLoan, 
  setInterestRate, 
  setNewEstimatedHomeValue, 
  setNewLoanAmount, 
  setNewLengthOfLoan, 
  setNewInterestRate 
} = calculatorInputSlice.actions;

/* export and define selectors */
// curr loan state
export const selectHomePrice = state => state.calculatorInput.homePrice;
export const selectDownPaymentAmount = state => state.calculatorInput.downPaymentAmount;
export const selectDownPaymentPct = state => state.calculatorInput.downPaymentPct;
export const selectLengthOfLoan = state => state.calculatorInput.lengthOfLoan;
export const selectInterestRate = state => state.calculatorInput.interestRate;
export const selectCurrMonthlyPandI = state => state.calculatorInput.currMonthlyPandI;

// refi terms state
export const selectNewEstimatedHomeValue = state => state.calculatorInput.newEstimatedHomeValue;
export const selectNewLoanAmount = state => state.calculatorInput.newLoanAmount;
export const selectNewLengthOfLoan = state => state.calculatorInput.newLengthOfLoan;
export const selectNewInterestRate = state => state.calculatorInput.newInterestRate;
export const selectNewMonthlyPandI = state => state.calculatorInput.newMonthlyPandI;
export const selectCashToClose = state => state.calculatorInput.cashToClose;

export default calculatorInputSlice.reducer;
