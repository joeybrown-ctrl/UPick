import { Container, Col, Row, Card } from 'react-bootstrap';
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
        <Container>
            <Card style={{ width: '18rem' }}>
                <Row className="justify-content-md-center">
                    <h1 style={styles.text}>Your Previous Picks</h1>
                </Row>
                <br></br>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <PreviousPickCard picksData={events}>  </PreviousPickCard>
                    </Col>
                </Row>
                <br></br>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <PreviousPickCard picksData={events}>  </PreviousPickCard>
                    </Col>
                </Row>
                <br></br>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <PreviousPickCard picksData={events}>  </PreviousPickCard>
                    </Col>
                </Row>
                <br></br>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <PreviousPickCard picksData={events}>  </PreviousPickCard>
                    </Col>
                </Row>
                <br></br>
            </Card>
        </Container>
    );
}

export default PreviousPicks;

