import React from 'react';
import { CurrentLoanInput } from './CurrentLoanInput';
import { RefiTermsInput } from './RefiTermsInput';
import { Button, Modal } from 'react-bootstrap';

export function CalculatorInput(props) {
    const [showNewLoanInfo, setShowNewLoanInfo] = React.useState(true);
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title>
                        Current Loan Information
                    </Modal.Title>
                </Modal.Header>    
                <Modal.Body>
                    {showNewLoanInfo ? 
                    <div>
                        <p>Tell us a little about your current loan</p>
                        <CurrentLoanInput />
                    </div> : 
                    <div>
                        <p>Give us your best estimate for your new loan</p>
                        <RefiTermsInput />
                    </div>}
                </Modal.Body>
                <Modal.Footer>
                    {showNewLoanInfo ? 
                    <div>
                        <Button variant="success" onClick={() => setShowNewLoanInfo(false)}>New Loan Info</Button>
                    </div> : 
                    <div>
                        <Button variant="success" onClick={() => setShowNewLoanInfo(true)}>Edit Current Loan Info</Button>{' '}
                        <Button onClick={() => props.calculate()}>Calculate</Button> {/* TODO needs to calculate and show results */}
                    </div>}
                </Modal.Footer>
            </Modal>
        </div>
    )
}