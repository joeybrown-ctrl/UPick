import { Button, Card } from 'react-bootstrap';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import useGeoLocation from '../../hooks/useGeoLocation';
import axios from 'axios';
import useFriends from '../../hooks/useFriends';

function Event() {

    const [restaurant, setRestaurant] = useState(false);
    const [movie, setMovie] = useState(false);
    const location = useGeoLocation();
    const [friendChoices] = useFriends();
    const [pick, toggleRedirect] = useState(0);


    const ENABLED_COLOR = '#FBE18B';
    const DISABLED_COLOR = '#FFD217';


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

        pick: {
            margin: '5px',
            backgroundColor: '#FFFFFF',
            color: '#1a2930',
            border: '0'
        },

        cardDiv: {
            marginTop: '10vh',
            /* display: flex;
            justify-content: center;
            align-items: center */
        },

        
        title: {
            color: '#f9f9f9c9',
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
                    <h5 style={styles.title}>Set Your Pick</h5>
                    <br/>
                    <Button 
                        style={
                            {backgroundColor: restaurant ? ENABLED_COLOR : DISABLED_COLOR, 
                                margin: '5px',
                                borderRadius: '5px 5px 5px 5px',
                                color: '#1a2930',
                                border: '0',
                                outline: 'none'
                            }} 
                        value={restaurant} 
                        onClick={handleRestaurantChange}>Eat & Drink
                    </Button>
                    <Button 
                        style={
                            {
                                backgroundColor: movie ? ENABLED_COLOR : DISABLED_COLOR, 
                                margin: '5px',
                                borderRadius: '5px 5px 5px 5px',
                                color: '#1a2930',
                                border: '0',
                            }}
                        value={movie} onClick={handleMovieChange}>Watch Now</Button>               
                    <Button 
                        style={
                            {
                                margin: '5px',
                                backgroundColor: '#FBE18B',
                                color: '#1a2930',
                                border: '0'
                            }
                        }>
                        Set My Location
                    </Button>
                    <br/>
                    <br/>
                    <br/>
                    
                    <Button style={styles.pick} onClick={handleSubmit} block>Start My Pick</Button>
                </Card>
            </div>
        </div>
    );
}

export default Event;