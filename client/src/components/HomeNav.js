import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';


function HomeNav() {

    const styles={

        root: {
            // display: 'flex',
            flexGrow: 1
        },

        navLink: {
            fontSize: '8pt'
        }
    };

    return( 

        <>
            <Navbar style={styles.root} bg="light" variant="light">
                <Navbar.Brand href="#home">UPick</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link style={styles.navLink} href="#about">About</Nav.Link>
                    <Nav.Link style={styles.navLink} href="#functionality">Functionality</Nav.Link>
                    <Nav.Link style={styles.navLink} href="#design">Design</Nav.Link>
                    <Nav.Link style={styles.navLink} href="#creators">Creators</Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
}

export default HomeNav;