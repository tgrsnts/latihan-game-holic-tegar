import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";


const NavigationBar = (props) => {
  return (
    <div>
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="/">Game Holic</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#trending">TRENDING GAMES</Nav.Link>
                        <Nav.Link href="#best">BEST GAMES</Nav.Link>                 
                    </Nav>
                </Container>
            </Navbar>
        </div>
  )
}

export default NavigationBar