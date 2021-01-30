import { Card, Button } from 'react-bootstrap';
import './style.css';

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
        fontWeight:'bold',
        fontSize: '40px'
    },
    body: {
        textAlign: 'center',
        color: '#c5c1c0'
    }
};

function FinalPickCard() {

    // The code to pull the pick goes here

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