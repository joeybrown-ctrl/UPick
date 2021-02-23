import { Row, Button } from 'react-bootstrap';

const styles = {
    btn: {
        float: 'center',
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#FFD217',
        border: '0',
        color: '#1a2930',
        padding: '10px 5px 10px 5px',
    },
    txt: {
        color: '#c5c1c0',
        textAlign: 'center'
    }
};

function ActivityBtn() {
    return (
        <>
            <Row>
                <p style={styles.txt}>Can't decide what to do?</p>
            </Row>
            <Row>
                {/* When this button is clicked it takes the user to the inital start a pick page */}
                <Button style={styles.btn} href='/startpick'>
                    Start a Pick
                </Button>
            </Row>
        </>
    );
}

export default ActivityBtn;

{/* <Button style={styles.btn}>
                    <i className="fas fa-utensils" style={styles.btn}></i></Button>
                <Button style={styles.btn}>
                    <i className="fas fa-glass-cheers" style={styles.btn}></i></Button>
                <Button style={styles.btn}>
                    <i className="fas fa-video" style={styles.btn}></i></Button> */}