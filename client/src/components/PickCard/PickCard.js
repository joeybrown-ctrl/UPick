import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import './style.css';
import { useParams } from 'react-router-dom';


function PickCard() {
    const {id} = useParams();
    console.log(id);
    const [pick, setPick] = useState([]); 

    useEffect(() => {
        fetchEvent();
        
        // database.collection('pick').onSnapshot(snapshot => (
        //     setPick(snapshot.docs.map(doc => doc.map))
        // ));

    }, []);

    function fetchEvent() {
        axios.get(`/api/event/${id}`).then(({data}) => {
            console.log(data);
            setPick(data.Activities);
        });
    }

    const styles = {
        btn: {
            backgroundColor: '#FFFFFF',
            border: '0',
            boxShadow: '0px 18px 53px 0px rgba(0,0,0,0.3)',
            margin: '10px',
            borderRadius: '50%'
        },

        Xbtn: {
            backgroundColor: '#FFFFFF',
            border: '0',
            boxShadow: '0px 18px 53px 0px rgba(0,0,0,0.3)',
            margin: '10px',
            borderRadius: '50%',
        }
    };
    
    return (
        <div className='gradient'>
            <div className="tinderCards__cardContainer">

                {pick.map(pick => (
                    <TinderCard
                        className='swipe'
                        key={pick.name}
                        preventSwipe={['up', 'down']}
                    >
                        <div 
                            style={{backgroundImage: `url(${pick.Image ? pick.Image:''})` }}
                            className='card'>
                            <h4>{pick.Name}</h4>

                        </div>
                    </TinderCard>
                ))}
                <div className='swipe-button'>
                    <Button className='swipe-button__left' style={styles.Xbtn}>
                        <i className="fas fa-times fa-2x"></i>
                    </Button>
                    <Button className='swipe-button__right' style={styles.btn}>
                        <i className="fas fa-heart fa-2x"></i>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default PickCard;