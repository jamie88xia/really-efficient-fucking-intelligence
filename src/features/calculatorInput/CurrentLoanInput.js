import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    setHomePrice, selectHomePrice,
    setDownPaymentAmount, selectDownPaymentAmount,
    setDownPaymentPct, selectDownPaymentPct,
    setLengthOfLoan, selectInterestRate,
    setInterestRate, selectLengthOfLoan,
} from './calculatorInputSlice';

export function CurrentLoanInput() {
    const dispatch = useDispatch();
    const homePrice = useSelector(selectHomePrice);
    const downPaymentAmount = useSelector(selectDownPaymentAmount);
    const downPaymentPct = useSelector(selectDownPaymentPct);
    const lengthOfLoan = useSelector(selectLengthOfLoan);
    const interestRate = useSelector(selectInterestRate);

    return (
        <div>
            <input
                className="temp"
                aria-label="Set home price"
                value={homePrice}
                onChange={e => dispatch(setHomePrice(e.target.value))}
            />
            <input
                className="temp"
                aria-label="Set Down Payment Amount"
                value={downPaymentAmount}
                onChange={e => dispatch(setDownPaymentAmount(e.target.value))}
            />
            <input
                className="temp"
                aria-label="Set Down Payment Pct"
                value={downPaymentPct}
                onChange={e => dispatch(setDownPaymentPct(e.target.value))}
            />
            <input
                className="temp"
                aria-label="Set "
                value={lengthOfLoan}
                onChange={e => dispatch(setLengthOfLoan(e.target.value))}
            />
            <input
                className="temp"
                aria-label="Set interestRate"
                value={interestRate}
                onChange={e => dispatch(setInterestRate(e.target.value))}
            />
        </div>
    );
}
