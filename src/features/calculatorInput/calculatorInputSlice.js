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
    currLoanStartDate: {
      month: 1,
      year: 2010
    },
    // todo we also need loan start month/year to calculate remaining months

    newLoanAmount: 240000, // refi terms info
    newLengthOfLoan: '30 Years', // refi terms info
    newInterestRate: 3, // refi terms info
    newMonthlyPandI: 1011.00,
    cashToClose: 5500,
    refiLoanStartDate: {
      month: 1,
      year: 2020
    },
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
    },
    setDownPaymentPct: (state, action) => {
      // todo constraints: must be less than homeprice (when converted to $)
      state.downPaymentPct = action.payload;
      state.downPaymentAmount = state.homePrice * action.payload / 100; // todo round
      state.initialPrinciple = state.homePrice - state.downPaymentAmount;
    },
    setLengthOfLoan: (state, action) => {
      state.lengthOfLoan = action.payload;
    },
    setInterestRate: (state, action) => {
      state.interestRate = action.payload;
    },
    setCurrLoanStartDate: (state, action) => {
      state.currLoanStartDate = action.payload;
    },

    // refi loan reducers
    setNewLoanAmount: (state, action) => {
      // todo constraits: must be less than initialPrinciple
      state.newLoanAmount = action.payload;
    },
    setNewLengthOfLoan: (state, action) => {
      state.newLengthOfLoan = action.payload;
    },
    setNewInterestRate: (state, action) => {
      state.newInterestRate = action.payload;
    },
    setCashToClose: (state, action) => {
      state.cashToClose = action.payload;
    },
    setRefiLoanStartDate: (state, action) => {
      state.refiLoanStartDate = action.payload;
    }
  },
});

export const { 
  setHomePrice, 
  setDownPaymentAmount, 
  setDownPaymentPct, 
  setLengthOfLoan, 
  setInterestRate, 
  setNewLoanAmount, 
  setNewLengthOfLoan, 
  setNewInterestRate,
  setCashToClose,
  setCurrLoanStartDate,
  setRefiLoanStartDate
} = calculatorInputSlice.actions;

/* export and define selectors */
// curr loan state
export const selectHomePrice = state => state.calculatorInput.homePrice;
export const selectDownPaymentAmount = state => state.calculatorInput.downPaymentAmount;
export const selectDownPaymentPct = state => state.calculatorInput.downPaymentPct;
export const selectLengthOfLoan = state => state.calculatorInput.lengthOfLoan;
export const selectInterestRate = state => state.calculatorInput.interestRate;

// refi terms state
export const selectNewLoanAmount = state => state.calculatorInput.newLoanAmount;
export const selectNewLengthOfLoan = state => state.calculatorInput.newLengthOfLoan;
export const selectNewInterestRate = state => state.calculatorInput.newInterestRate;
export const selectCashToClose = state => state.calculatorInput.cashToClose;

export const selectCurrMonthlyPandI = state => calculateMonthlyPayments(state.calculatorInput.interestRate, state.calculatorInput.initialPrinciple, state.calculatorInput.lengthOfLoan);
export const selectNewMonthlyPandI = state => calculateMonthlyPayments(state.calculatorInput.newInterestRate, state.calculatorInput.newLoanAmount, state.calculatorInput.newLengthOfLoan);

export const selectCurrLoanStartDate = state => state.calculatorInput.currLoanStartDate;
export const selectRefiLoanStartDate = state => state.calculatorInput.refiLoanStartDate;

export default calculatorInputSlice.reducer;
