import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import { Button } from 'react-bootstrap';
import './style.css';


function PickCard() {

    const [pick, setPick] = useState([
        {
            Image: 'https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABRUab8e9aGUukN2TTgiEKL5CyOC9gmK5ZrS8qDKi7fTJbsqvgMrICj8BalIBY5_gdDYLPgeNwvxLbsIt3Xc_vQRjrA.jpg?r=873',
            // URL: '',
            Name: 'A Clockwork Orange'
        },

        {
            Image: 'https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABRUab8e9aGUukN2TTgiEKL5CyOC9gmK5ZrS8qDKi7fTJbsqvgMrICj8BalIBY5_gdDYLPgeNwvxLbsIt3Xc_vQRjrA.jpg?r=873',
            // URL: '',
            Name: 'A Clockwork Orange'
        }
    ]); 

    useEffect(() => {
        setPick(
            [{
                Image: 'https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABRUab8e9aGUukN2TTgiEKL5CyOC9gmK5ZrS8qDKi7fTJbsqvgMrICj8BalIBY5_gdDYLPgeNwvxLbsIt3Xc_vQRjrA.jpg?r=873',
                // URL: '',
                Name: 'A Clockwork Orange'
            },
    
            {
                Image: 'https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABRUab8e9aGUukN2TTgiEKL5CyOC9gmK5ZrS8qDKi7fTJbsqvgMrICj8BalIBY5_gdDYLPgeNwvxLbsIt3Xc_vQRjrA.jpg?r=873',
                // URL: '',
                Name: 'A Clockwork Orange'
            }]
        );
        // database.collection('pick').onSnapshot(snapshot => (
        //     setPick(snapshot.docs.map(doc => doc.map))
        // ));

    }, []);

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
                            style={{backgroundImage: `url(${pick.Image})` }}
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