import { Card, Button } from 'react-bootstrap';


//this is to get a list of PAST events
//call this right when the page loads into state
//then filter through the array of events and return all events where the date is less than todays date
//put that into state, and then render that to the page

const styles = {
    btn: {
        float: 'center',
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#FFD217',
        border: '0',
        color: '#1a2930'
    }
};


const Pick = () => {
    return (
        <Card>
            <Card.Header> <h6>You and Nova Picked</h6>
            </Card.Header>
            <Button style={styles.btn}>
                Sauce
            </Button>
        </Card>
    );
};

export default Pick;

