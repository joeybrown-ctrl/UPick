import { Button, Card } from 'react-bootstrap';
import './style.css';
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
    const [button1, setButton1] = useState('#FFD217');
    const [button2, setButton2] = useState('#FFD217');
    // const [button3, setButton3] = useState('#FFD217');

    function handleButtonColor1() {
        if (restaurant === true) {
            setButton1('#FBE18B');
        }
        else {
            setButton1('#FFD217');
        }
    }

    function handleButtonColor2() {
        if (movie === true) {
            setButton2('#FBE18B');
        }
        else {
            setButton2('#FFD217');
        }
    }

    function handleRestaurantChange() {
        setRestaurant(!restaurant);
        handleButtonColor1();
    }

    function handleMovieChange() {
        setMovie(!movie);
        handleButtonColor2();
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
                    <Button 
                        style={
                            {backgroundColor: button1, 
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
                                backgroundColor: button2, 
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