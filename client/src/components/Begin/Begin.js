import './style.css';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Begin() {

    const styles = {
        card: {
            backgroundColor: 'transparent'
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
                    <Link to='/friend'>
                        <Button style={styles.btn} className='begin' block>
                    Get Started
                        </Button>
                    </Link>
                </Card>
            </div> 
        </div>
            
    );
}

export default Begin;

