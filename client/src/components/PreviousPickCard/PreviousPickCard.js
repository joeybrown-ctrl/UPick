import { Card, Button } from 'react-bootstrap';


const PreviousPickCard = (props) => {


    const styles = {
        btn: {
            float: 'center',
            width: '100%',
            textAlign: 'center',
            backgroundColor: '#FFD217',
            border: '0',
            color: '#1a2930'
        }
    };


    return (
        <Card>
            <Card.Header> <h6>{/* {props.picksData.Thing you want} */}</h6>
            </Card.Header>
            <Button style={styles.btn}>
                {/* {props.picksData.Thing you want} */}

            </Button>
        </Card>
    );
};

export default PreviousPickCard;

