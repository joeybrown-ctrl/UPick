import { Card } from 'react-bootstrap';

const styles = {

    text: {
        color: '#c5c1c0'
    }
};

const ProfileTitle = () => {
    return (
        <Card.Title style={styles.text}>Nova</Card.Title>
    );
};

export default ProfileTitle;

