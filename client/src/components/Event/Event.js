import { Button, ToggleButtonGroup, ToggleButton, Card } from 'react-bootstrap';
import './style.css';
// import { useState } from 'react';

function Event() {

    // const [checked, setChecked] = useState(false);
    // const [radioValue, setRadioValue] =useState('1');

    // const what = [
    //     { name: 'Eat/Drink', value: '1' },
    //     { name: 'Watch', value: '2' }
    // ];

    // const where = [
    //     { name: 'Staying In', value: '1' },
    //     { name: 'Going Out', value: '2' }
    // ]

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

        toggle: {
            alignItems: 'center'
        },

        tBtn: {
            margin: '5px',
            borderRadius: '5px 5px 5px 5px',
            backgroundColor: '#FFD217',
            color: '#1a2930',
            border: '0'
        },

        location: {
            margin: '5px',
            backgroundColor: '#c5c1c0',
            color: '#1a2930',
            border: '0'
        }


    };

    return (
        <div className='gradient'>
            <div className='card-div'>
                <Card style={styles.card}>
                    <h5 className='title'>A Few Questions</h5>
                    <ToggleButtonGroup style={styles.toggle} type="checkbox" defaultValue={[1]} className="mb-2">
                        <ToggleButton style={styles.tBtn} value={1}>Going Out</ToggleButton>
                        <ToggleButton style={styles.tBtn} value={2}>Staying In</ToggleButton>
                    </ToggleButtonGroup>
                    <ToggleButtonGroup style={styles.toggle} type="checkbox" defaultValue={[2]} className="mb-2">
                        <ToggleButton style={styles.tBtn} value={1}>Going Out</ToggleButton>
                        <ToggleButton style={styles.tBtn} value={2}>Staying In</ToggleButton>
                    </ToggleButtonGroup>
                
                    <Button style={styles.location} block>Find My Location</Button>
                    
                    
                    <br/>
                    
                </Card>
            </div>
        </div>
    );
}

export default Event;