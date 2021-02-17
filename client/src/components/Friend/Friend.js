import { Card, Button } from 'react-bootstrap';
import FriendList from '../FriendList/FriendList';
import { Link } from 'react-router-dom';

function Friend() {

    const styles = {
        card: {
            backgroundColor: 'transparent',
            height: '66vh'
        },

        pick: {
            backgroundColor: '#FFD217',
            border: '0',
            color: '#1a2930'
        },

        cardDiv: {
            marginTop: '10vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start'
        },

        title: {
            textAlign: 'center',
            paddingBottom: '10px'
        },      

        invite: {
            color: '#f9f9f9c9',
            textAlign: 'center'
        }
    };


    return(
        <div className='gradient'>
            <div style={styles.cardDiv}>
                <Card style={styles.card}>
                    <br/>
                    <h5 style={styles.title}>Choose A Friend</h5>
                    <br/>
                    <div className="friend-list">
                        <FriendList/>
                        <Link to='/event'>
                            <Button style={styles.pick} type='submit' block>Next</Button>
                        </Link>
                        <br/>
                        <p style={styles.invite}>Invite A Friend</p>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Friend;