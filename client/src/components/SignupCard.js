import { useState } from 'react';
import { Redirect, useHistory, useLocation, Link } from 'react-router-dom';
import useAuth from '../hooks/auth';
import { Card, Form, Button } from 'react-bootstrap';

const SignupCard = () => {
    const { signup, isLoggedIn } = useAuth();
    // History and location are hooks we can use to manipulate our page's history!
    const history = useHistory();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // For our redirect
    const [redirectToLogin, toggleRedirect] = useState(false);
    // This is the key part to our redirect. We can pull the prior location out here, if it exists
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
            // width: '18rem',
            padding: '20px',
            backgroundColor: 'transparent',
            border: '0',
            justifyContent: 'center',
            height: '66vh'
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
        },

        cardDiv: {
            marginTop: '10vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start'
            // align-items: center
        },

        title: {
            color: '#f9f9f9c9'
        },

        redirect: {
            color: '#f9f9f9c9'
            /* color: #2d2d2dbb */
        },

        link: {
            color: '#f9f9f9c9',
            cursor: 'pointer'

        },

        onboarding: {
            fontSize: '10pt',
            color: '#1a2930',
            backgroundColor: '#f9f9f9c9',
            border: 0,
            padding: '8px'
        },
    };

    return (
        <div className='gradient'>
            <div style={styles.cardDiv}>
                <Card style={styles.card}>
                    <Form onSubmit={handleSubmit}>
                        <h2 style={styles.title}>Signup</h2>
                        <Form.Group>
                            <br/>
                            {/* <Form.Label style={styles.formText} htmlFor='email'>Email:</Form.Label> */}
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
                            <Button style={styles.btn} type='submit' block>Signup</Button>
                        </Form.Group>
                        <p style={styles.redirect}>
                        Already have an account? 
                        </p>
                        <p style={styles.link} onClick={() => toggleRedirect(true)}>Login Here</p>
                        <br/>
                        <Link to={'/onboarding'}>
                            <Button style={styles.onboarding} block> Learn how Upick works</Button>
                        </Link>
                        <br/>
                        <Link to={'/ourapp'}>
                            <Button style={styles.onboarding} block>Meet Upick's developers</Button>
                        </Link>
                    </Form>
                </Card>
            </div>
        </div>
    );
};

export default SignupCard;