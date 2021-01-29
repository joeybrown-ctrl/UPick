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
                        <Nav.Link href="/begin">Begin</Nav.Link>
                        <Nav.Link href="/friend"><i class="fas fa-users"></i></Nav.Link>
                        <Nav.Link href="/event">Event</Nav.Link>
                        <Nav.Link href="/profile"><i className="fas fa-user-circle"></i></Nav.Link>
                        {isLoggedIn() ?
                            <>
                                <li>Hello, {getProfile().email}</li>
                                <li><Link onClick={() => logout()} to='/'><i className="fas fa-sign-out-alt"></i></Link></li>
                            </>
                            :
                            <>
                                <Nav.Link href="/signup">Signup</Nav.Link>
                                <Nav.Link href="/login">Login</Nav.Link>
                            </>
                        }
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default MainNav;
