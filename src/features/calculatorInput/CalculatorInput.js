import React from 'react';
import { CurrentLoanInput } from './CurrentLoanInput';
import { RefiTermsInput } from './RefiTermsInput';

export function CalculatorInput() {
    return (
        <div>
            <CurrentLoanInput />
            <RefiTermsInput />
        </div>
    )
}