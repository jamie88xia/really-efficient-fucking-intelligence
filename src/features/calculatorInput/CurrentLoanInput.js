import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    setHomePrice, selectHomePrice,
    setDownPaymentAmount, selectDownPaymentAmount,
    setDownPaymentPct, selectDownPaymentPct,
    setLengthOfLoan, selectInterestRate,
    setInterestRate, selectLengthOfLoan,
} from './calculatorInputSlice';
import { Card, Form, InputGroup, Col } from 'react-bootstrap';


export function CurrentLoanInput() {
    const dispatch = useDispatch();
    const homePrice = useSelector(selectHomePrice);
    const downPaymentAmount = useSelector(selectDownPaymentAmount);
    const downPaymentPct = useSelector(selectDownPaymentPct);
    const lengthOfLoan = useSelector(selectLengthOfLoan);
    const interestRate = useSelector(selectInterestRate);

    return (
        <Card>
            <Card.Header>Current Loan Information</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group controlId="PurchasePriceFormGroup">
                        <Form.Label>Home Price</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Append>
                            <InputGroup.Text>$</InputGroup.Text>
                            </InputGroup.Append>
                            <Form.Control placeholder="Purchase Price" value={homePrice} onChange={e => dispatch(setHomePrice(e.target.value))}/>
                        </InputGroup>
                        <Form.Text className="text-muted">
                            What was the purchase price of your home?
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="DownPaymentFormGroup">
                        <Form.Label>Down Payment</Form.Label>
                        <Form.Row>
                            <Col sm="8">
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                    <InputGroup.Text>$</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control id="DownPaymentAmount" placeholder="Down Payment" value={downPaymentAmount} onChange={e => dispatch(setDownPaymentAmount(e.target.value))}/>
                                </InputGroup>
                            </Col>
                            <Col sm="4">
                                <InputGroup className="mb-3">
                                    <InputGroup.Append>
                                    <InputGroup.Text>%</InputGroup.Text>
                                    </InputGroup.Append>
                                    <Form.Control id="DownPaymentPct" placeholder="Down Payment" value={downPaymentPct} onChange={e => dispatch(setDownPaymentPct(e.target.value))}/>
                                </InputGroup>
                            </Col>
                        </Form.Row>                        
                        <Form.Text className="text-muted">
                            Enter your down payment by $ amount or % for your current loan.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="LengthOfLoan">
                        <Form.Label>Length of Loan</Form.Label>
                        <Form.Control as="select"
                                value={lengthOfLoan}
                                onChange={e => dispatch(setLengthOfLoan(e.target.value))}>
                            <option value="30 Years">30 Years</option>
                            <option value="15 Years">15 Years</option>
                        </Form.Control>                        
                        <Form.Text className="text-muted">
                            Select the terms of your current loan.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="PurchasePriceFormGroup">
                        <Form.Label>Interest Rate</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                            <InputGroup.Text>%</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control placeholder="Interest Rate"
                                value={interestRate}
                                onChange={e => dispatch(setInterestRate(e.target.value))}/>
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
