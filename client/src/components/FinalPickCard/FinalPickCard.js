import { Card, Button } from 'react-bootstrap';
import './style.css';
import axios from 'axios';
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';

const styles = {
    btn: {
        float: 'center',
        width: '100%',
        height: '40px',
        textAlign: 'center',
        backgroundColor: '#FFD217',
        border: '0',
        color: '#1a2930'
    },
    title: {
        color: '#c5c1c0',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '40px'
    },
    body: {
        textAlign: 'center',
        color: '#c5c1c0'
    }
};

function FinalPickCard() {

    // The code to pull the pick goes here
    // const {id} = useParams();
    // console.log(id);
    // const [picks, setPicks] = useState([]); 

    // function fetchVote() {
    //     axios.get('/api/vote').then(({ data }) => {
    //         console.log(data);

    //     });
    // }

    // if (data.status === true){
    //     console.log(data.status);
    // }

    // grab the 10 most recent votes

    // function fetchEvent() {
    //     axios.get(`/api/event/${id}`).then(({data}) => {
    //         console.log(data);
    //         // setPicks(data.Activities);

    //     });
    // }

    // fetchVote();
    // fetchEvent();

    // fetch the votes, get all votes that are true, randomly select one of the true events, then go to the event use the ActivityId to get the url, photo, and name of the selection.


    axios.get('/api/vote')
        .then((data) => {
            console.log(data);
        });


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Title style={styles.title}>
                Congrats!
            </Card.Title>
            <Card.Title style={styles.title}>
                U-Picked!
            </Card.Title>
            {/* Insert code to pull photo of thing chosen below */}
            <Card.Img variant="top rounded" src="./assets/food-default.jpg" alt="Picture of Thing Chosen Goes here" />
            <Card.Title style={styles.body}>Name of Thing Chosen goes here</Card.Title>
            <Card.Body>
                <Card.Link href='/profile'>
                    <Button style={styles.btn}>
                        <p>I'm Done</p>
                    </Button>
                </Card.Link>
            </Card.Body>
        </Card>
    );
}

export default FinalPickCard;