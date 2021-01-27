import { Row, Col, Button, Image } from 'react-bootstrap';

function FriendList() {

    const styles = {

        icon: {
            width: '40px',
            height: '40px'
        },

        iconCol: {
            paddingRight: '40px'
        },

        friendBtn: {
            textAlign: 'left',
            backgroundColor: '#212f35',
            color: '#f9f9f9c9',
            border: '0 solid #FFD217'
        },

    };

    return(
        <>
            <Row>
                <Col xs={1} style={styles.iconCol}>
                    <Image style={styles.icon}src="./assets/friendicon.png" rounded />
                </Col>
                <br/>
                <Col >
                    <Button block style={styles.friendBtn} >Friend Name</Button>
                </Col>
            </Row>
            <br/>
        </>
    );
    
}

export default FriendList;
