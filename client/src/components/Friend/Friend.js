import './style.css';
import { Card, Button } from 'react-bootstrap';
import FriendList from '../FriendList/FriendList';
import { Link } from 'react-router-dom';

function Friend() {

    const styles = {
        card: {
            backgroundColor: 'transparent'
        },

        pick: {
            backgroundColor: '#FFD217',
            border: '0',
            color: '#1a2930'
        }
    };


    return(
        <div className='gradient'>
            <div className='card-div'>
                <Card style={styles.card}>
                    <br/>
                    <h5 className='title'>Choose A Friend</h5>
                    <br/>
                    <div className="friend-list">
                        <FriendList/>
                        <Link to='/event'>
                            <Button style={styles.pick} type='submit' block>Next</Button>
                        </Link>
                        <br/>
                        <p className='invite'>Invite A Friend</p>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Friend;