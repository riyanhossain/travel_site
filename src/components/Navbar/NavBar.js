import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from '../../images/Logo.png'
import './NavBar.css'

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg='none' >
            <Container>
                <Navbar.Brand href="/"><img src={logo} alt="" className='logo' /></Navbar.Brand>
                <Form className='form'>
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                </Form>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">

                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">News</Nav.Link>
                        <Nav.Link href="#deets">Destination</Nav.Link>
                        <Nav.Link href="#deets">Blog</Nav.Link>
                        <Nav.Link href="#deets">Contact</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar