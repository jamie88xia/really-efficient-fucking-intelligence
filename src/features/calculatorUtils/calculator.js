export function calculateMonthlyPayments(annualInterestRateInPct, initialPrinciple, mortgageStartMonthAndYear) {
    // taken from https://www.valuepenguin.com/mortgages/mortgage-payments-calculator
    
    // todo use mortgageStartMonthAndYear to calculate remaining terms (also extra payments)
    const numMonthsRemaining = 300;
    const monthlyInterestRate = annualInterestRateInPct / 100 / 12;

    return initialPrinciple * (monthlyInterestRate + Math.pow(1 + monthlyInterestRate, numMonthsRemaining)) / (Math.pow(1 + monthlyInterestRate, numMonthsRemaining) - 1);
}