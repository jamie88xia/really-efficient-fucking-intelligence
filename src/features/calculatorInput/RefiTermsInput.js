import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setNewEstimatedHomeValue, selectNewEstimatedHomeValue,
  setMoneyIn, selectMoneyIn,
  setNewLoanAmount, selectNewLoanAmount,
  setNewLengthOfLoan, selectNewLengthOfLoan,
  setNewInterestRate, selectNewInterestRate,
} from './calculatorInputSlice';

export function RefiTermsInput() {
    const dispatch = useDispatch();
    const newEstimatedHomeValue = useSelector(selectNewEstimatedHomeValue);
    const moneyIn = useSelector(selectMoneyIn);
    const newLoanAmount = useSelector(selectNewLoanAmount);
    const newLengthOfLoan = useSelector(selectNewLengthOfLoan);
    const newInterestRate = useSelector(selectNewInterestRate);
    
    return (
        <div>
            <input
                className="temp"
                aria-label="Set home price"
                value={newEstimatedHomeValue}
                onChange={e => dispatch(setNewEstimatedHomeValue(e.target.value))}
            />
            <input
                className="temp"
                aria-label="Set Down Payment Amount"
                value={moneyIn}
                onChange={e => dispatch(setMoneyIn(e.target.value))}
            />
            <input
                className="temp"
                aria-label="Set Down Payment Pct"
                value={newLoanAmount}
                onChange={e => dispatch(setNewLoanAmount(e.target.value))}
            />
            <input
                className="temp"
                aria-label="Set "
                value={newLengthOfLoan}
                onChange={e => dispatch(setNewLengthOfLoan(e.target.value))}
            />
            <input
                className="temp"
                aria-label="Set interestRate"
                value={newInterestRate}
                onChange={e => dispatch(setNewInterestRate(e.target.value))}
            />
        </div>
    );
}