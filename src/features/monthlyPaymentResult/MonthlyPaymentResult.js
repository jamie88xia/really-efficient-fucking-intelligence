import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    selectCurrMonthlyPandI, selectNewMonthlyPandI
} from '../calculatorInput/calculatorInputSlice';

export function MonthlyPaymentResult() {

    const newLoanPandI = useSelector(selectNewMonthlyPandI);
    const currPandI = useSelector(selectCurrMonthlyPandI);

    const statement = `Your monthly principal and interest payments will go ${currPandI - newLoanPandI < 0 ? 'UP' : 'DOWN'} by $${Math.round((currPandI - newLoanPandI) * 100)/100} if you refinance.`;

    return (
        <div>{statement}</div>
    )
}