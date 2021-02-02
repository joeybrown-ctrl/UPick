import { Button } from 'react-bootstrap';


const PreviousPickCard = () => {


    const styles = {
        pickBtn: {
            marginBottom: '20px',
            padding: '10px',
            backgroundColor: '#FFD217',
            border: '0',
            color: '#1a2930'
        }
    };


    return (
        
        <div>
            <Button style={styles.pickBtn} block>
                <p>Your Pick with Marceline</p>
                <h6>You Picked: "The Great British Baking Show"</h6>
            </Button>
            <br/>
            <Button style={styles.pickBtn} block>
                <p>Your Pick with Myelin</p>
                <h6>You Picked: "The Cuppit Kitchen"</h6>
            </Button>
            <br/>
            <Button style={styles.pickBtn} block>
                <p>Your Pick with Gus</p>
                <h6>You Picked: "Twin Peaks"</h6>
            </Button>
        </div>
    //     <Card>
    //         <Card.Header> <h6>{/* {props.picksData.Thing you want} */}</h6>
    //         </Card.Header>
    //         <Button style={styles.btn}>
    //             {/* {props.picksData.Thing you want} */}

    //         </Button>
    //     </Card>
    // );
    );
};

export default PreviousPickCard;

