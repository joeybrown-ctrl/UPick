import { Container, Col, Row, Card } from 'react-bootstrap';
import Picks from '../components/Picks/Picks';

const styles = {
    text: {
        color: '#c5c1c0'
    }
};

function YourPicks() {

    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Row className="justify-content-md-center">
                    <h1 style={styles.text}>Your Picks</h1>
                </Row>
                <br></br>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Picks />
                    </Col>
                </Row>
                <br></br>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Picks />
                    </Col>
                </Row>
                <br></br>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Picks />
                    </Col>
                </Row>
                <br></br>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Picks />
                    </Col>
                </Row>
                <br></br>
            </Card>
        </Container>
    );
}

export default YourPicks;

