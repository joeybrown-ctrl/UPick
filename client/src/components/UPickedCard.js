import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import TinderCard from 'react-tinder-card';

function UPickedCard(props) {

    const { results } = props;
    const { eventId } = useParams();

    const styles = {

        cardDiv: {
            marginTop: '5vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            height: '66vh',
        },

        card: {
            // width: '18rem',
            padding: '0px 20px',
            backgroundColor: 'transparent',
            border: '0',
            justifyContent: 'center',
            height: '90vh',
            
        },

        h5: {
            textAlign: 'center',
            paddingBottom: '10px',
            color: '#f9f9f9c9'
        }, 

        h4: {
            textAlign: 'center',
            paddingTop: '15px',
            color: '#f9f9f9c9'
        }, 

        h1: {
            textAlign: 'center',
            color: '#f9f9f9c9',
            fontWeight: 'bold',
            fontSize: '34px'
        },

        imgDiv: {
            marginTop: '2vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start'
        },
        
        cardImg: {
            maxWidth: '400px',
            height: '30vh',
            borderRadius: '20px',
        },
        
        cardTitle: {
            position: 'absolute',
            bottom: '10px',
            color: 'white',
            fontWeight: '800',   
        }, 

        btn1: {
            margin: '10px 20px',
            background: '#f9f9f9c9',
            border: 'none',
            color: '#1a2930',
            fontWeight: 'bold',
            fontSize: '15pt',
            letterSpacing: '2px',
            width: '245px'

        },

        btn2: {
            margin: '10px 20px',
            background: '#FED215',
            border: 'none',
            color: '#1a2930',
            fontWeight: 'bold',
            fontSize: '15pt',
            letterSpacing: '2px',
            width: '245px'
        }, 

        demoLink: {
            textAlign: 'center',
        },

        demoText: {
            color: '#f9f9f9c9',
            fontSize: '11pt'
        }


    };


    return(
        <div className='gradient'>
            <div style={styles.cardDiv}>
                <Card style={styles.card}>
                    <h5 style={styles.h5}>Congrats!</h5>
                    <h1 style={styles.h1}>UPicked!</h1>
                    <div style={styles.imgDiv}>
                        <img
                            fluid
                            style={styles.cardImg}
                            alt={'U Picked'}
                            src={results.URL} />
                    </div>
                    <br/>
                    <h4 style={styles.h4}>{results.Name}</h4>
                    
                    <Link>
                        <Button style={styles.btn1}>Start New Pick</Button>
                    </Link>
                    <Link>
                        <Button style={styles.btn2}>I'm Done</Button>
                    </Link>
                    <Link style={styles.demoLink} to={{pathname:`/wepicked/${eventId}`}}>
                        <p style={styles.demoText}>We Picked Demo</p>
                    </Link>
                </Card>
            </div>

        </div>
    );
}

export default UPickedCard;

