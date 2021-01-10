import { useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../hooks/auth';

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

    return (
        <div>
            <h2>
                Login Page
            </h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>Email:</label>
                <input
                    name='email'
                    placeholder='Email'
                    type='email'
                    autoComplete='username'
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <br />
                <label htmlFor='password'>Password:</label>
                <input
                    name='password'
                    placeholder='Password'
                    type='password'
                    autoComplete='password'
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <br />
                <button type='submit'>Login</button>
            </form>
            <p>
                Need an account? <button onClick={() => toggleRedirect(true)}>Signup Here</button>
            </p>

        </div >
    );
};

export default Login;