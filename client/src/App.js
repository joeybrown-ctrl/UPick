import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
import useAuth from './hooks/auth';
// import Begin from './components/Begin/Begin';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Notes from './pages/Notes';
import Friend from './components/Friend/Friend';
import MainNav from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './pages/Profile';
import Event from './components/Event/Event';
// import YourPicks from './pages/YourPicks';
// import Activity from './components/Activity/Activity';
import PickCard from './components/PickCard/PickCard';
// import Header from './components/Header/Header';
import YourPicks from './pages/PreviousPicks';

function App() {
    // Pull auth token from storage, in case you refresh the page
    const { getToken, logout } = useAuth();
    axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;

    // A nice trick that if we EVER get back a 401, will pop the token off
    axios.interceptors.response.use(response => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, error => {
        const { message } = error.toJSON();
        // If we had time, we could write our own custom method to the auth middleware
        // However, we are just gonna use their message.
        if (message === 'Request failed with status code 401') {
            logout();
        }
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });

    return (
        <Router>
            <MainNav />
            {/* <Header/> */}
            <Switch>
                <PrivateRoute exact path='/friend'>
                    <Friend />
                </PrivateRoute>
                <PrivateRoute exact path='/event'>
                    <Event/>
                </PrivateRoute>
                <Route exact path='/pick'>
                    <PickCard/>
                </Route>
                <PrivateRoute exact path='/profile'>
                    <Profile />
                </PrivateRoute>
                <PrivateRoute exact path='/yourpicks'>
                    <YourPicks />
                </PrivateRoute>
                <Route path='/signup'>
                    <Signup />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                <PrivateRoute exact path='/notes'>
                    <Notes />
                </PrivateRoute>
                <Route exact path='/'>
                    <Profile />
                </Route>  
            </Switch>
        </Router>
    );
}

// Yanked straight from the react-router docs for redirects
function PrivateRoute({ children, ...rest }) {
    const { isLoggedIn } = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLoggedIn() ? (
                    children
                ) :
                    (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}


export default App;
