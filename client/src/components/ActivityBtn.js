import { Row, Button, Container } from 'react-bootstrap';

const styles = {
    btn: {
        float: 'center',
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#FFD217',
        border: '0',
        color: '#1a2930'
    },
    txt: {
        color: '#c5c1c0',
        textAlign: 'center'
    }
};

const ActivityBtn = () => {
    return (
        <Container>
            <Row>
                <p style={styles.txt}>Can't decide what to do?</p>
            </Row>
            <Row>
                {/* When this button is clicked it takes the user to the inital start a pick page */}
                <Button style={styles.btn} href='/event'>
                    Start a Pick
                </Button>
            </Row>
        </Container>
    );
};

export default ActivityBtn;

{/* <Button style={styles.btn}>
                    <i className="fas fa-utensils" style={styles.btn}></i></Button>
                <Button style={styles.btn}>
                    <i className="fas fa-glass-cheers" style={styles.btn}></i></Button>
                <Button style={styles.btn}>
                    <i className="fas fa-video" style={styles.btn}></i></Button> */}