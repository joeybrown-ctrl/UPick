import { useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/auth';
import { Card, Form, Button } from 'react-bootstrap';
import './style.css';

const Signup = () => {
    const { signup, isLoggedIn } = useAuth();
    // History and location are hooks we can use to manipulate our page's history!
    const history = useHistory();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // For our redirector
    const [redirectToLogin, toggleRedirect] = useState(false);
    // This is the key part to our redirector. We can pull the prior location out here, if it exists
    const { from } = location.state || { from: { pathname: '/' } };

    const handleSubmit = event => {
        event.preventDefault();
        signup(email, password).then(res => {
            // Go back to whence you came!
            history.replace(from);
        });
    };

    if (isLoggedIn()) {
        return <Redirect to={location.state || '/'} />;
    }

    if (redirectToLogin) {
        // If someone goes to login, this transfers the redirect
        return <Redirect to={{
            pathname: '/login',
            state: { from: from }
        }}
        />;
    }

    const styles = {
        card: {
            width: '38rem',
            padding: '20px',
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center'
        }
    };

    return (
        <div className='gradient'>
            <div className='card-div'>
                <Card style={styles.card}>
                    <Form>
                        <h2 className='title'>
                Signup Page
                        </h2>
                        <Form.Group controlId="formBasicEmail" onSubmit={handleSubmit}>
                            <Form.Label htmlFor='email'>Email:</Form.Label>
                            <Form.Control
                                name='email'
                                placeholder='Email'
                                type='email'
                                autoComplete='username'
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                            />
                            <br />
                            <Form.Label htmlFor='password'>Password:</Form.Label>
                            <Form.Control
                                name='password'
                                placeholder='Password'
                                type='password'
                                autoComplete='password'
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                            />
                            <br />
                            <Button type='submit'>Signup</Button>
                        </Form.Group>
                        <p>
                Already have an account? <Button onClick={() => toggleRedirect(true)}>Login Here</Button>
                        </p>
                    </Form>
                </Card>
            </div>
        </div>
    );
};

export default Signup;