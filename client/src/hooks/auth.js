import createPersistedState from 'use-persisted-state';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

const tokenState = createPersistedState('token');
const userState = createPersistedState('user');

const useAuth = () => {
    const [token, setToken] = tokenState('');
    const [user, setUser] = userState({});

    const login = async (email, password) => {
        return axios.post('api/auth/login',
            { email: email, password: password })
            .then(res => {
                setToken(res.data.token);
                setUser(res.data.user);
                // Stick the JWT in ALL requests in the Authorization header.
                axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
                return res;
            });
    };

    const signup = async (email, password) => {
        return axios.post('api/auth/signup',
            { email: email, password: password })
            .then(res => {
                setToken(res.data.token);
                setUser(res.data.user);
                // Stick the JWT in ALL requests in the Authorization header.
                axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
                return res;
            });
    };

    const logout = () => {
        // Clean out the header
        axios.defaults.headers.common.Authorization = null;
        setToken('');
        setUser({});
        // Clean out state
        // We are forcing a reload to prevent old state from existing post logout.
        window.location.reload('/');
    };

    // call to check if a token is too old
    const isTokenExpired = () => {
        try {
            const decoded = jwtDecode(token);
            return decoded.exp < Date.now() / 1000;
        }
        catch (err) {
            // here incase of a weird token
            return false;
        }
    };

    // grab the encoded user data here
    const getProfile = () => {
        return jwtDecode(token);
    };

    // call to get the token
    const getToken = () => {
        return token;
    };

    // call to see if the browser is logged in
    const isLoggedIn = () => {
        return token !== undefined && token !== '' && !isTokenExpired();
    };

    return {
        login,
        logout,
        user,
        getProfile,
        isLoggedIn,
        signup,
        getToken
    };
};

export default useAuth;