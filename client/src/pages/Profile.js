import { Card } from 'react-bootstrap';
import ActivityBtn from '../components/ActivityBtn';
// import CardImg from '../components/CardImg/CardImg';
import ProfileBtn from '../components/ProfileBtn';
// import ProfileBio from '../components/ProfileBio';
import ProfileTitle from '../components/ProfileTitle';
import PendingBtn from '../components/PendingBtn';
import ProfilePicture from '../components/ProfilePicture';


function Profile() {

    const styles = {
        card: {
            backgroundColor: 'transparent',
            position: 'relative',
            width: '400px',
            paddingRight: '35px',
            paddingLeft: '35px',
            maxWidth: '85vw',
            height: '100vh',
            borderRadius: '20px',
            boxShadow: '0px 18px 53px 0px rgba(0,0,0,0.3),'
        },

        cardDiv: {
            marginTop: '7vh',
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'flex-start'
        }
    };

    return (
        <div className='gradient'>
            <div style={styles.cardDiv}>
                <Card style={styles.card}>
                    {/* <CardImg/> */}
                    <ProfilePicture/>
                    <ProfileTitle/>
                    <PendingBtn/>
                    <br/>
                    <ProfileBtn/>
                    <br/>
                    <ActivityBtn/>
                </Card>
            </div>
        </div>
    );
}

export default Profile;

