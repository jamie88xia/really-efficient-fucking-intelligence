export function calculateMonthlyPayments(annualInterestRateInPct, initialPrinciple, lengthOfLoan) {
    // taken from https://www.valuepenguin.com/mortgages/mortgage-payments-calculator
    
    // todo use mortgageStartMonthAndYear to calculate remaining terms (even future todo: take extra payments)
    const P = initialPrinciple;
    const I = annualInterestRateInPct / 100 / 12;
    let N = 0;
    switch(lengthOfLoan) {
        case '30 Years':
            N = 360;
            break;
        case '15 Years':
            N = 180;
            break;
        default:
            N = 360;
    }

    const monthlyPAndI = P * (I * Math.pow(1 + I, N)) / (Math.pow(1 + I, N) - 1);

    return monthlyPAndI;
}