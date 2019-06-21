import React from 'react';
import {Nav, Navbar,Container, Form, FormControl,Button} from 'react-bootstrap';
import {Search} from 'styled-icons/fa-solid';
import Logo from './Logo';




function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="xl" fixed="top">
        <Container>
            <Logo />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
                <Nav className="ml-auto">
                    <Nav.Link href="#home">
                        <Search className="mr-2" size="15" />
                        Advanced Search
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Header;
