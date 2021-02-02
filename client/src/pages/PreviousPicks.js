import { Row, Card } from 'react-bootstrap';
import PreviousPickCard from '../components/PreviousPickCard/PreviousPickCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

//this is to get a list of PAST events
//call this right when the page loads into state
//then filter through the array of events and return all events where the date is less than todays date
//put that into state, and then render that to the page

const styles = {
    text: {
        color: '#c5c1c0',
        textAlign: 'center'
    },

    card: {
        backgroundColor: 'transparent',
        position: 'relative',
        width: '400px',
        padding: '35px',
        maxWidth: '85vw',
        height: '66vh',
        borderRadius: '20px',
        boxShadow: '0px 18px 53px 0px rgba(0,0,0,0.3),'
    },

    cardDiv: {
        marginTop: '7vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'flex-start'
    }
};

function PreviousPicks() {

    const [events, setEvents] = useState();

    const findEvents = () => {
        axios.get('/api/event')
            .then(results => {
                const data = results.data;
                console.log(data);
                setEvents(data);
            });
    };
    useEffect(() => {
        findEvents();
    }, []);


    return (
        <div className='gradient'>
            <div style={styles.cardDiv}>
                <Card style={styles.card}>
                    <h5 style={styles.text}>Your Previous Picks</h5>
                    <br/>
                    {/* Shosh, you will want to map through the previous card picks here. 
                    I know this is just a display for now :) I am just making
                    notes for my own memory */}
                    <Row className="justify-content-md-center">
                        {/* <Col md="auto"> */}
                        <PreviousPickCard picksData={events}>  </PreviousPickCard>
                        {/* </Col> */}
                    </Row>
                    {/* <br></br>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                        <PreviousPickCard picksData={events}>  </PreviousPickCard>
                        </Col>
                    </Row> */}
                </Card>
            </div>
        </div>
    );
}

export default PreviousPicks;

