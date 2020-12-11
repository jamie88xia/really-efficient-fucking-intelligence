import { createSlice } from '@reduxjs/toolkit';

export const calculatorInputSlice = createSlice({
  name: 'calculatorInput',
  initialState: {
    homePrice: 300000, // current loan info
    downPaymentAmount: 60000, // current loan info 
    downPaymentPct: 20, // current loan info
    lengthOfLoan: '30 Years', // current loan info
    interestRate: 5, // current loan info
    remainingPrinciple: 240000, // current loan info
    // todo we need curr loan monthy p+i
    // todo we also need loan start month/year to calculate remaining months

    newEstimatedHomeValue: 320000, // refi terms info
    moneyIn: 0, // refi terms info
    newLoanAmount: 240000, // refi terms info
    newLengthOfLoan: '30 Years', // refi terms info
    newInterestRate: 3, // refi terms info
    // todo we need new loan p+i
  },
  reducers: {
    // curr loan reducers
    setHomePrice: (state, action) => {
      state.homePrice = action.payload;
      state.downPaymentPct = state.downPaymentAmount / action.payload * 100; // todo round
      state.remainingPrinciple = state.homePrice - state.downPaymentAmount;
      state.newLoanAmount = state.remainingPrinciple - state.moneyIn;
      // todo this should update curr loan monthly p+i
    },
    setDownPaymentAmount: (state, action) => {
      // todo constraints: must be less than homeprice
      state.downPaymentAmount = action.payload;
      state.downPaymentPct = action.payload / state.homePrice; // todo round
      state.remainingPrinciple = state.homePrice - state.downPaymentAmount;
      state.newLoanAmount = state.remainingPrinciple - state.moneyIn;
      // todo this should update curr loan monthly p+i
      // todo this should update refi monthly p+i
    },
    setDownPaymentPct: (state, action) => {
      // todo constraints: must be less than homeprice (when converted to $)
      state.downPaymentPct = action.payload;
      state.downPaymentAmount = state.homePrice * action.payload / 100; // todo round
      state.remainingPrinciple = state.homePrice - state.downPaymentAmount;
      state.newLoanAmount = state.remainingPrinciple - state.moneyIn;
      // todo this should update curr loan monthly p+i
      // todo this should update refi monthly p+i
    },
    setLengthOfLoan: (state, action) => {
      state.lengthOfLoan = action.payload;
      // todo this needs to update curr loan monthly p+i
    },
    setInterestRate: (state, action) => {
      state.interestRate = action.payload;
      // todo this needs to update curr loan monthly p+i
    },

    // refi loan reducers
    setNewEstimatedHomeValue: (state, action) => {
      state.newEstimatedHomeValue = action.payload;
      // todo this should update refi monthly p+i
    },
    setMoneyIn: (state, action) => {
      // todo constraits: must be less than remainingPrinciple
      state.moneyIn = action.payload;
      state.newLoanAmount = state.remainingPrinciple - action.payload;
      // todo this should update refi monthly p+i
    },
    setNewLoanAmount: (state, action) => {
      // todo constraits: must be less than remainingPrinciple
      state.newLoanAmount = action.payload;
      state.moneyIn = state.remainingPrinciple - state.newLoanAmount;
      // todo this should udpate refi monthly p+i 
    },
    setNewLengthOfLoan: (state, action) => {
      state.newLengthOfLoan = action.payload;
      // todo this should udpate refi monthly p+i 
    },
    setNewInterestRate: (state, action) => {
      state.newInterestRate = action.payload;
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
  setMoneyIn, 
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
export const selectInterestRate= state => state.calculatorInput.interestRate;

// refi terms state
export const selectNewEstimatedHomeValue = state => state.calculatorInput.newEstimatedHomeValue;
export const selectMoneyIn = state => state.calculatorInput.moneyIn;
export const selectNewLoanAmount = state => state.calculatorInput.newLoanAmount;
export const selectNewLengthOfLoan = state => state.calculatorInput.newLengthOfLoan;
export const selectNewInterestRate= state => state.calculatorInput.newInterestRate;

export default calculatorInputSlice.reducer;
