import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setNewLoanAmount, selectNewLoanAmount,
  setNewLengthOfLoan, selectNewLengthOfLoan,
  setNewInterestRate, selectNewInterestRate,
} from './calculatorInputSlice';
import { Card, Form, InputGroup } from 'react-bootstrap';


export function RefiTermsInput() {
    const dispatch = useDispatch();
    const newLoanAmount = useSelector(selectNewLoanAmount);
    const newLengthOfLoan = useSelector(selectNewLengthOfLoan);
    const newInterestRate = useSelector(selectNewInterestRate);
    
    return (
        <Card>
            <Card.Header>Refinance Information</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group controlId="NewLoanAmount">
                        <Form.Label>Refi Loan Amount</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Append>
                            <InputGroup.Text>$</InputGroup.Text>
                            </InputGroup.Append>
                            <Form.Control placeholder="Refinance Loan Amount" value={newLoanAmount} onChange={e => dispatch(setNewLoanAmount(e.target.value))}/>
                        </InputGroup>
                        <Form.Text className="text-muted">
                            What's the principal on your new loan?
                        </Form.Text>
                    </Form.Group>


                    <Form.Group controlId="CashToCloseAmount">
                        <Form.Label>Refi Loan Amount</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Append>
                            <InputGroup.Text>$</InputGroup.Text>
                            </InputGroup.Append>
                            <Form.Control placeholder="Refinance Loan Amount" value={newLoanAmount} onChange={e => dispatch(setNewLoanAmount(e.target.value))}/>
                        </InputGroup>
                        <Form.Text className="text-muted">
                            Estimated cash to close
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="NewLengthOfLoan">
                        <Form.Label>New Length of Loan</Form.Label>
                        <Form.Control as="select">
                            <option value="30 Years">30 Years</option>
                            <option value="15 Years">15 Years</option>
                        </Form.Control>                        
                        <Form.Text className="text-muted" value={newLengthOfLoan} onChange={e => dispatch(setNewLengthOfLoan(e.target.value))}>
                            Select the terms for your refinance loan.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="NewInterestRate">
                        <Form.Label>New Interest Rate</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                            <InputGroup.Text>%</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control placeholder="Interest Rate" value={newInterestRate} onChange={e => dispatch(setNewInterestRate(e.target.value))}/>
                        </InputGroup>
                        <Form.Text className="text-muted">
                            Please tell us the interest rate on your current loan.
                        </Form.Text>
                    </Form.Group>
                </Form>
            </Card.Body>         
        </Card>
    );
}