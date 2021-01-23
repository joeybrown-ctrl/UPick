import { Card, Button, Row } from 'react-bootstrap';

const styles = {
    btnOne: {
        float: 'center',
        width: '33%',
        textAlign: 'center',
        backgroundColor: '#FFD217',
        border: '0',
        color: '#1a2930'
    },

    btnTwo: {
        backgroundColor: '#1a2930',
        border: '0',
        color: '#FFD217',
        float: 'center',
        textAlign: 'center',
        width: '33%'
    },

    btn: {
        backgroundColor: '#FFD217',
        border: '0',
        color: '#1a2930',
        height: '40px',
        width: '50%'
    },

    profileName: {
        textAlign: 'center',
        fontWeight: 'bold',
        width: '50%',
        color: '#c5c1c0'
    },

    text: {
        color: '#c5c1c0'
    }

};

const ProfileCard = ({children}) => {
    return (
        <Card style={{ width: '18rem' }} className='gradient'>
            <Card.Img variant="top" src="https://placekitten.com/350/300" />
            <Card.Body>
                <Card.Title style={styles.profileName}>Nova</Card.Title>
                <Row>
                    <Button style={styles.btn}>
                        <p><i class="fas fa-map-marker-alt"></i> Location</p>
                    </Button>
                    <Button style={styles.btn}>
                        <p><i class="fas fa-users"></i> Friends</p>
                    </Button>
                </Row>
                <Card.Text style={styles.text}>
                    Profile Bio Goes Here
                </Card.Text>
                <p style={styles.text}>Choose what you want to do:</p>
                <Row>
                    <Button style={styles.btnOne}>
                        <i className="fas fa-utensils" style={styles.btnOne}></i></Button>
                    <Button style={styles.btnTwo}>
                        <i className="fas fa-glass-cheers" style={styles.btnTwo}></i></Button>
                    <Button style={styles.btnOne}>
                        <i className="fas fa-video" style={styles.btnOne}></i></Button>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default ProfileCard;
