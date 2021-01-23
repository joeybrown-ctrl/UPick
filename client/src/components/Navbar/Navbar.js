import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/auth';
// import './style.css';

const MainNav = () => {
    const { isLoggedIn, logout, getProfile } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/home">UPick</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav ">      
                    <Nav className="mr-auto">
                        <Nav.Link href="/Begin">Begin</Nav.Link>
                        {isLoggedIn() ?
                            <>
                                <li>Hello, {getProfile().email}</li>
                                <li><Link onClick={() => logout()} to='/'>Logout</Link></li>
                            </>
                            :
                            <>
                                <Nav.Link href="/signup">Signup</Nav.Link>
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link href="/profile">Profile</Nav.Link>
                                <Nav.Link href="/yourpicks">Your Picks</Nav.Link>
                            </>
                        }
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default MainNav;
