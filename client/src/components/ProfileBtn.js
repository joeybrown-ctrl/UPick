import { Button, Row } from 'react-bootstrap';

const styles = {
    btn: {
        float: 'center',
        width: '50%',
        height: '50px',
        textAlign: 'center',
        backgroundColor: '#FFD217',
        border: '0',
        color: '#1a2930'
    },
};

const ProfileBtn = () => {
    return (
        <Row>
            <Button style={styles.btn} href='/yourpicks'>
                <p><i className="fas fa-search"></i> Previous Picks</p>
            </Button>
            <Button style={styles.btn}>
                <p><i className="fas fa-users"></i> Friends</p>
            </Button>
        </Row>
    );
};

export default ProfileBtn;