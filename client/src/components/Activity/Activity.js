import { Card } from 'react-bootstrap';

function Activity() {

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
        }

    };

    return (
        <div className='gradient'>
            <div className='card-div'>
                <Card style={styles.card}>
                </Card>
            </div>
        </div>
    );}

export default Activity;