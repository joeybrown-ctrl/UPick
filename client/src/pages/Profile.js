import { Container, Card } from 'react-bootstrap';
// import ProfileCard from '../components/ProfileCard/ProfileCard';
import ActivityBtn from '../components/ActivityBtn';
import CardImg from '../components/CardImg/CardImg';
import ProfileBtn from '../components/ProfileBtn';
import ProfileBio from '../components/ProfileBio';
import ProfileTitle from '../components/ProfileTitle';


function Profile() {

    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <CardImg></CardImg>
                <Card.Body>
                    <ProfileTitle></ProfileTitle>
                    <ProfileBio></ProfileBio>
                    <ProfileBtn></ProfileBtn>
                    <ActivityBtn></ActivityBtn>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Profile;

