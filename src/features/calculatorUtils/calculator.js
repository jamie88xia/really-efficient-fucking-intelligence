export function calculateMonthlyPayments(annualInterestRateInPct, initialPrinciple, lengthOfLoan) {
    // taken from https://www.valuepenguin.com/mortgages/mortgage-payments-calculator
    
    // todo use mortgageStartMonthAndYear to calculate remaining terms (even future todo: take extra payments)
    let numMonthsRemaining = 0;
    switch(lengthOfLoan) {
        case '30 Years':
            numMonthsRemaining = 360;
            break;
        case '15 Years':
            numMonthsRemaining = 180;
            break;
        default:
            numMonthsRemaining = 360;
    }
    const monthlyInterestRate = annualInterestRateInPct / 100 / 12;

    return initialPrinciple * (monthlyInterestRate + Math.pow(1 + monthlyInterestRate, numMonthsRemaining)) / (Math.pow(1 + monthlyInterestRate, numMonthsRemaining) - 1);

    // todo rounding
}