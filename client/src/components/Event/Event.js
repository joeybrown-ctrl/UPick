import { Button, ToggleButtonGroup, ToggleButton, Card } from 'react-bootstrap';
import './style.css';
import { useState } from 'react';

function Event() {

    const [whatValue, setWhatValue] = useState([1,2]);
    const [whereValue, setWhereValue] = useState([1,2]);

    const handleWhatChange = (whatValue) => setWhatValue(whatValue); 
    const handleWhereChange = (whereValue) => setWhereValue(whereValue);

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
            backgroundColor: '#FFD217',
            color: '#1a2930',
            border: '0'
        },

        pick: {
            margin: '5px',
            backgroundColor: '#FFFFFF',
            color: '#1a2930',
            border: '0'
        }


    };

    return (
        <div className='gradient'>
            <div className='card-div'>
                <Card style={styles.card}>
                    <br/>
                    <h5 className='title'>Set Your Pick</h5>
                    <br/>
                    <ToggleButtonGroup style={styles.toggle} type="checkbox" value={whatValue} onChange={handleWhatChange} className="mb-2">
                        <ToggleButton style={styles.tBtn} value={1}>Eat & Drink</ToggleButton>
                        <ToggleButton style={styles.tBtn} value={2}>Watch Now</ToggleButton>
                    </ToggleButtonGroup>
                    <ToggleButtonGroup style={styles.toggle} type="checkbox" value={whereValue} onChange={handleWhereChange} className="mb-2">
                        <ToggleButton style={styles.tBtn} value={1}>Going Out</ToggleButton>
                        <ToggleButton style={styles.tBtn} value={2}>Staying In</ToggleButton>
                    </ToggleButtonGroup>
                
                    <Button style={styles.location}>Set My Location</Button>
                    <br/>
                    <br/>
                    <br/>
                    <Button style={styles.pick}>Start My Pick</Button>
                    
                </Card>
            </div>
        </div>
    );
}

export default Event;