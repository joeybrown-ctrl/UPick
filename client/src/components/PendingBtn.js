import { Button, Row } from 'react-bootstrap';

const styles = {
    btn: {
        float: 'center',
        width: '100%',
        height: '40px',
        textAlign: 'center',
        backgroundColor: '#FFD217',
        border: '0',
        color: '#1a2930'
    },
};

const PendingBtn = () => {
    return (
        <Row>
            <Button style={styles.btn} href='/yourpicks'>
                <p><i className="fas fa-spinner"></i> Pending Picks</p>
            </Button>
        </Row>
    );
};

export default PendingBtn;