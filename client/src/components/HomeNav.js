import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';


function HomeNav() {

    const styles={

        root: {
            background: 'none'
        },

        navLink: {
            fontSize: '14pt',
            color: '#1a2930'
        },

        toggle: {
            borderColor: '#ffffff',
            
        }
    };

    return( 

        <>
            <Navbar expand="lg">
                <Navbar.Brand href="#home">UPick</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={styles.toggle}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link style={styles.navLink} href="#about">About</Nav.Link>
                        <Nav.Link style={styles.navLink} href="#functionality">Functionality</Nav.Link>
                        <Nav.Link style={styles.navLink} href="#design">Design</Nav.Link>
                        <Nav.Link style={styles.navLink} href="#creators">Creators</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </>
    );
}

export default HomeNav;