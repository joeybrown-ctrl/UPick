import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


function HomeNav() {

    const styles={

        // root: {
        //     display: 'flex',
        //     flexGrow: 1
        // },

        navLink: {
            fontSize: '12pt'
        }
    };

    return( 

        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">UPick</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link style={styles.navLink} href="#about">About</Nav.Link>
                    <Nav.Link style={styles.navLink} href="#functionality">Functionality</Nav.Link>
                    <Nav.Link style={styles.navLink} href="#design">Design</Nav.Link>
                    <Nav.Link style={styles.navLink} href="#creators">Creators</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
}

export default HomeNav;