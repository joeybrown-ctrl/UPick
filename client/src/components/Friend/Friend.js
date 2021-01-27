import './style.css';
import { Card, Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import FriendList from '../FriendList/FriendList';

function Friend() {

    const styles = {
        card: {
            // width: '22rem',
            width: '100%',
            height: 'auto',
            padding: '20px',
            backgroundColor: 'transparent',
            // border: '0',
            justifyContent: 'center',
            overflowY: 'scroll'
        },

        search: {
            backgroundColor: '#FFD217',
            border: '0',
            color: '#1a2930',
            borderRadius: '0px 5px 5px 0px'
        },

        bar: {
            backgroundColor: '#212f35',
            color: '#f9f9f9c9',
            border: '0'
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
                    <h5 className='title'>Choose A Friend</h5>
                    <Form inline>                
                        <InputGroup>
                            <FormControl
                                style={styles.bar}
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            /> 
                            <InputGroup.Prepend>
                                <InputGroup.Text style={styles.search}><i class="fas fa-search search-link"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            
                        </InputGroup>
                    </Form>
                    <br/>
                    <div className="friend-list">
                        <FriendList/>
                        <Button style={styles.pick} type='submit' block>Start Your Pick</Button>
                        <br/>
                        <p className='invite'>Invite A Friend</p>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Friend;