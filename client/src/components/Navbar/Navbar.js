import { Navbar, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import useAuth from '../../hooks/auth';

const MainNav = () => {
    const { isLoggedIn, logout} = useAuth();

    const styles = {
        navBar: {
        // position: 'fixed',
        // bottom: '10vh',
            display: 'flex',
            justifyContent: 'space-evenly'
        },

        navDiv: {
            backgroundColor: '#1a2930',
            padding: '20px'
        }
    };
    return (
        <div style={styles.navDiv}>
            {/* <Navbar bg="dark" variant="dark"> */}
            <Nav style={styles.navBar} className="mr-auto">
                {/* <Nav.Link href="/friend"><i class="fas fa-users"></i></Nav.Link> */}
                <Nav.Link href="/profile"><i className="fas fa-user-circle" style={{color: '#FFFFFF'}}></i></Nav.Link>
                <Navbar.Brand href="/profile" style={{color: '#FFFFFF'}}>UPick</Navbar.Brand>
                {isLoggedIn() ?
                    <>
                        <Nav.Link onClick={() => logout()} to='/'><i className="fas fa-sign-out-alt" style={{color: '#FFFFFF'}}></i></Nav.Link>
                    </>
                    :
                    <>
                        {/* <Nav.Link href="/signup">Signup</Nav.Link> */}
                        <Nav.Link href="/login"><i className="fas fa-sign-out-alt" style={{color: '#FFFFFF'}}></i></Nav.Link>
                    </>
                }
            </Nav>
            {/* </Navbar> */}
        </div>
    );
};

export default MainNav;