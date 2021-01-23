import { Container, Col, Row } from 'react-bootstrap';
import ProfileCard from '../components/ProfileCard/ProfileCard';

function Profile() {

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto"><ProfileCard /></Col>
            </Row>
        </Container>
    );
}

export default Profile;

