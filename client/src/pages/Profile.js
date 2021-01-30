import { Card } from 'react-bootstrap';
import ActivityBtn from '../components/ActivityBtn';
import CardImg from '../components/CardImg/CardImg';
import ProfileBtn from '../components/ProfileBtn';
// import ProfileBio from '../components/ProfileBio';
import ProfileTitle from '../components/ProfileTitle';
import PendingBtn from '../components/PendingBtn';
// import './style.css';


function Profile() {

    const styles = {
        card: {
            backgroundColor: 'transparent'
        },

        cardDiv: {
            marginTop: '15vh'
        }
    };

    return (
        <div className='gradient'>
            <div style={styles.cardDiv}>
                <Card style={styles.card}>
                    <CardImg></CardImg>
                    <Card.Body>
                        <ProfileTitle></ProfileTitle>
                        {/* <ProfileBio></ProfileBio> */}
                        <PendingBtn></PendingBtn>
                        <hr></hr>
                        <ProfileBtn></ProfileBtn>
                        <br></br>
                        <ActivityBtn></ActivityBtn>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Profile;

