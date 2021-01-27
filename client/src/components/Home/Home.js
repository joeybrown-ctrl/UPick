import './style.css';
import { Button, Card } from 'react-bootstrap';

function Begin() {

    const styles = {
        card: {
            width: '18rem',
            padding: '20px',
            backgroundColor: 'transparent',
            border: '0',
            justifyContent: 'center',
        },

        btn: {
            backgroundColor: '#FFD217',
            border: '0',
            color: '#1a2930'
        }
    };

    return (
        <div className='gradient'>
            <div className='card-div'>
                <Card style={styles.card}>
                    <Button style={styles.btn} className='begin' block>
                    Get Started
                    </Button>
                </Card>
            </div> 
        </div>
            
    );
}

export default Begin;

