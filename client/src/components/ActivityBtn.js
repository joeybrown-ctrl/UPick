import { Row, Button, Container } from 'react-bootstrap';

const styles = {
    btn: {
        float: 'center',
        width: '33%',
        textAlign: 'center',
        backgroundColor: '#FFD217',
        border: '0',
        color: '#1a2930'
    },
};

const ActivityBtn = () => {
    return (
        <Container>
            <Row>
                <p style={styles.text}>Choose what you want to do:</p>
            </Row>
            <Row>
                <Button style={styles.btn}>
                    <i className="fas fa-utensils" style={styles.btn}></i></Button>
                <Button style={styles.btn}>
                    <i className="fas fa-glass-cheers" style={styles.btn}></i></Button>
                <Button style={styles.btn}>
                    <i className="fas fa-video" style={styles.btn}></i></Button>
            </Row>
        </Container>
    );
};

export default ActivityBtn;