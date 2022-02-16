import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import logo from '../../images/Logo.png'
import './NavBar.css'

function NavBar() {
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"><img src={logo} alt="" className='logo' /></Navbar.Brand>
                <Form className='form'>
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ml-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        
                        <Nav.Link href="#action1">News</Nav.Link>
                        <Nav.Link href="#action2">Destination</Nav.Link>
                        <Nav.Link href="#action1">Blog</Nav.Link>
                        <Nav.Link href="#action2">Contact</Nav.Link>
                        <Button>Login</Button>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar