import { Card, Button } from 'react-bootstrap';

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

