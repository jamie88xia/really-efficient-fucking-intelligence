import React from 'react';
import { Navbar } from 'react-bootstrap'

export function NavBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="../../logo.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{'  '}
                Should I Refinance Calculator
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}