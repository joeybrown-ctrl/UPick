import { Button, Row } from 'react-bootstrap';

const styles = {
    btn: {
        // float: 'center',
        // height: '35px',
        padding: '10px 5px 10px 5px',
        // margin: '3px 1px 3px 1x',
        textAlign: 'center',
        backgroundColor: '#FFD217',
        border: '0',
        color: '#1a2930',
        // fontSize: '11px',
    },

    row: {
        // display: 'flex',
        // justifyContent: 'space-evenly',
        // alignItems: 'center',

    }

};

const ProfileBtn = () => {
    return (
        <>
            <Row style={styles.row}>
                <Button style={styles.btn} href='/yourpicks' block>
                    <i className="fas fa-search"></i> Your Picks
                </Button>
            </Row>
            <br/>
            <Row>
                <Button style={styles.btn} href='/startpick' block>
                    <i className="fas fa-users"></i> Friends
                </Button>
            </Row>
        </>
    );
};

export default ProfileBtn;