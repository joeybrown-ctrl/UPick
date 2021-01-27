import { Container, Card } from 'react-bootstrap';
// import ProfileCard from '../components/ProfileCard/ProfileCard';
import ActivityBtn from '../components/ActivityBtn';
import CardImg from '../components/CardImg/CardImg';
import ProfileBtn from '../components/ProfileBtn';
import ProfileBio from '../components/ProfileBio';
import ProfileTitle from '../components/ProfileTitle';
import PendingBtn from '../components/PendingBtn';


function Profile() {

    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <CardImg></CardImg>
                <Card.Body>
                    <ProfileTitle></ProfileTitle>
                    <ProfileBio></ProfileBio>
                    <PendingBtn></PendingBtn>
                    <hr></hr>
                    <ProfileBtn></ProfileBtn>
                    <br></br>
                    <ActivityBtn></ActivityBtn>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Profile;

