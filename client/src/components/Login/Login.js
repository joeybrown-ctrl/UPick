import { useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/auth';
import { Card, Form, Button } from 'react-bootstrap';
import './style.css';

const Login = () => {
    const { login, isLoggedIn } = useAuth();
    // History and location are hooks we can use to manipulate our page's history!
    const history = useHistory();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // For our redirector
    const [redirectToSignup, toggleRedirect] = useState(false);
    // This is the key part to our redirector. We can pull the prior location out here, if it exists
    const { from } = location.state || { from: { pathname: '/' } };

    const handleSubmit = event => {
        event.preventDefault();
        login(email, password).then(res => {
            history.replace(from);
        });
    };

    if (isLoggedIn()) {
        return <Redirect to={location.state || '/'} />;
    }

    if (redirectToSignup) {
        return <Redirect to={{
            // If someone goes to signup, this transfers the redirect
            pathname: '/signup',
            state: { from: from }
        }}
        />;
    }

    const styles = {
        card: {
            width: '18rem',
            padding: '20px',
            backgroundColor: 'transparent',
            border: '0',
            justifyContent: 'center',
        },

        control: {
            backgroundColor: '#212f35',
            color: '#f9f9f9c9',
            border: '0'
        },

        btn: {
            backgroundColor: '#FFD217',
            border: '0',
            color: '#1a2930'
        }
    };

    return (
        <div className='gradient'>
            <div className='card-div'>
                <Card style={styles.card}>
                    <Form onSubmit={handleSubmit}>
                        <h2 className='title'>Login Page</h2>
                        <Form.Group>
                            <br/>
                            <Form.Control
                                style={styles.control}
                                name='email'
                                placeholder='Email'
                                type='email'
                                autoComplete='username'
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                            />
                            <br />
                            <Form.Control
                                style={styles.control}
                                name='password'
                                placeholder='Password'
                                type='password'
                                autoComplete='password'
                                value={password}
                                onChange={event => setPassword(event.target.value)}
                            />
                            <br />
                            <Button style={styles.btn} type='submit' block>Login</Button>
                        </Form.Group>
                        <p className='redirect'>Need an account?</p>
                        <p className='link' onClick={() => toggleRedirect(true)}>Signup Here</p>
            
                    </Form>
                </Card>
            </div>
        </div >
    );
};

export default Login;