
// components
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useEffect, useState } from 'react';

const MyNavBar = () => {
    const {activeLink, setActiveLink} = useState('home');
    const {scrolled, setScrolled} = useState(false);

    // function to change the page layout when scrolling
    const onScroll = () => {
        if (window.scrollY > 50){
            setScrolled(true)
        }
        else{
            setScrolled(false)
        }
    }

    // use effect to see when user has scrolled far enough
    useEffect (() => {
        window.addEventListener("scroll", onScroll);

        // remove the contents when not needed
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }


    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : "" } bg="light" data-bs-theme="light">
        <Container>
            <Navbar.Brand href="#home">
                {/* <img alt="Logo" /> */}
                Logo
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className='"navbar-toggler-icon'> Toggle</span>
            </ Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" > Home </Nav.Link>
                <Nav.Link href="#About Me" >About Me </Nav.Link>
                <Nav.Link href="#projects" > Projects </Nav.Link>
                <Nav.Link href="#Contact" > Contact </Nav.Link>
                
            </Nav>
            
            </Navbar.Collapse>

        </Container>
        </Navbar>
    );
}

export default MyNavBar