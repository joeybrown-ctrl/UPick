import { Button } from 'react-bootstrap';


const PreviousPickCard = () => {


    const styles = {
        pickBtn: {
            marginBottom: '20px',
            padding: '10px',
            backgroundColor: '#FFD217',
            border: '0',
            color: '#1a2930'
        },

        cardDiv: {
            marginTop: '5vh',
        },

        card: {
            backgroundColor: 'transparent',
            height: '66vh',
            textAlign: 'center'
        },
    };


    return (
        
        <div style={styles.cardDiv}>
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
  
    );
};

export default PreviousPickCard;

