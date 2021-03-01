import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import { Button } from 'react-bootstrap';
// import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './style.css';
import { useParams } from 'react-router-dom';

const alreadyRemoved = [];

function PickCard() {
    const { id } = useParams();
    console.log(id);
    const [picks, setPicks] = useState([]);
    const [childRefs, setChildRefs] = useState([]);
    // let childRefs = [];

    useEffect(() => {
        fetchEvent();

    }, []);

    function fetchEvent() {
        axios.get(`/api/event/${id}`).then(({ data }) => {
            console.log(data);
            setPicks(data.Activities);
            setChildRefs([...data.Activities].fill(0).map(i => React.createRef()));
            console.log(childRefs);

        });
    }

    function voteNo(id) {
        const data = {
            ActivityId: id,
            status: false
        };
        axios.post('/api/vote', data);
    }

    function voteYes(id) {
        const data = {
            ActivityId: id,
            status: true
        };
        axios.post('/api/vote', data);
    }

    // if (vote === 10) {
    //     return <Redirect to={{
    //         // If someone goes to signup, this transfers the redirect
    //         pathname: '/upicked/:id',
    //     }}
    //     />;
    // }

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

    const swiped = (_direction, id) => {
        console.log('removing: ' + id);
        alreadyRemoved.push(id);
        if (_direction === 'left') {
            voteNo(id);
        }
        else if (_direction === 'right') {
            voteYes(id);
        }
    };

    const onSwipe = (direction, id) => {
        const cardsLeft = picks.filter(pick => !alreadyRemoved.includes(pick.id));
        if (cardsLeft.length) {
            const toBeRemoved = cardsLeft[cardsLeft.length - 1].id; // Find the card object to be removed
            const index = picks.map(pick => pick.id).indexOf(toBeRemoved); // Find the index of which to make the reference to
            alreadyRemoved.push(toBeRemoved); // Make sure the next card gets removed next time if this card do not have time to exit the screen
            console.log(index, alreadyRemoved, id, childRefs);
            childRefs[index].current.swipe(direction); // Swipe the card!
        }
        
        console.log('You swiped: ' + direction + id);
    };

    return (
        <div className='gradient'>
            <div className="tinderCards__cardContainer">

                {picks.map((pick, index) => (
                    <>
                        <TinderCard
                            ref={childRefs[index]}
                            onSwipe={(dir) => swiped(dir, pick.id)}
                            className='swipe'
                            key={pick.id}
                            preventSwipe={['up', 'down']}
                        >
                            <div
                                style={{ backgroundImage: `url(${pick.Image ? pick.Image : '../assets/fooddefault.png'})` }}
                                className='cardImg'>
                                <h4>{pick.Name}</h4>

                            </div>
                        </TinderCard>
                        <div className='swipe-button'>
                            <Button className='swipe-button__left' onClick={() => onSwipe('left', pick.id)} style={styles.Xbtn}>
                                <i className="fas fa-times fa-2x"></i>
                            </Button>
                            <Button className='swipe-button__right' onClick={() => onSwipe('right', pick.id)} style={styles.btn}>
                                <i className="fas fa-heart fa-2x"></i>
                            </Button>
                        </div>
                    </>
                ))}

            </div>
        </div>
    );
}

export default PickCard;