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
        },

        
        cardDiv: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },

        btnBegin: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 12px 16px 0 #ff4747, 0 17px 50px 0 #ff4747',
            /* width: 300px */
        }
    };

    return (
        <div className='gradient'>
            <div className='card-div' style={styles.cardDiv}>
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

