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

            {/* When a user clicks this button it takes them to a pending pick with another user */}

            <Button style={styles.btn}>
                <p><i className="fas fa-spinner"></i> Pending Picks</p>
            </Button>
        </Row>
    );
};

export default PendingBtn;