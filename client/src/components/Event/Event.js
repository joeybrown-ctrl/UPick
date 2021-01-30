import { Button, Card } from 'react-bootstrap';
import './style.css';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import useGeoLocation from '../../hooks/useGeoLocation';
import axios from 'axios';
import useFriends from '../../hooks/useFriends';

function Event() {

    const [restaurant, setRestaurant] = useState(true);
    const [movie, setMovie] = useState(true);
    const location = useGeoLocation();
    const [friendChoices] = useFriends();
    const [pick, toggleRedirect] = useState(0);
    // const [location, setLocation] = useState({
    //     lat: '',
    //     long: ''
    // });
    
    // function useGeoLocation() {
    //     setLocation({
    //         lat: '',
    //         long: ''
    //     });
    // };

    function handleRestaurantChange() {
        setRestaurant(!restaurant);
    }

    function handleMovieChange() {
        setMovie(!movie);
    }

    function handleSubmit() {
        const data = {
            longitude: location.coordinates.longitude,
            latitude: location.coordinates.latitude,
            name: Date.now(),
            activityType: [],
            inviteEmails: friendChoices
        };

        if (movie) {
            data.activityType.push('movies');
        } 

        if (restaurant) {
            data.activityType.push('restaurants');
        } 
        data.activityType=data.activityType.join(',');
        axios.post('/api/event/withactivity', data).then(({data}) => toggleRedirect(data.id));
    }

    const styles = {

        card: {
            backgroundColor: 'transparent',
            height: '66vh',
        },

        toggle: {
            alignItems: 'center'
        },

        tBtn: {
            margin: '5px',
            borderRadius: '5px 5px 5px 5px',
            backgroundColor: '#FFD217',
            color: '#1a2930',
            border: '0'
        },

        location: {
            margin: '5px',
            backgroundColor: '#FFD217',
            color: '#1a2930',
            border: '0'
        },

        pick: {
            margin: '5px',
            backgroundColor: '#FFFFFF',
            color: '#1a2930',
            border: '0'
        },

        cardDiv: {
            marginTop: '10vh',
        }


    };

    if (pick) {
        return <Redirect to={{
            // If someone goes to signup, this transfers the redirect
            pathname: '/pick/' + pick,
        }}
        />;
    }

    return (
        <div className='gradient'>
            <div style={styles.cardDiv}>
                <Card style={styles.card}>
                    <br/>
                    <h5 className='title'>Set Your Pick</h5>
                    <br/>
                    <Button style={styles.tBtn} value={restaurant} onClick={handleRestaurantChange}>Eat & Drink</Button>
                    <Button style={styles.tBtn} value={movie} onClick={handleMovieChange}>Watch Now</Button>               
                    <Button style={styles.location}>Set My Location</Button>
                    <br/>
                    <br/>
                    <br/>
                    
                    <Button style={styles.pick} onClick={handleSubmit} block>Start My Pick</Button>
                    
                    <div>
                        {
                            location.loaded ? JSON.stringify(location): 'Location access denied.'
                        }
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Event;