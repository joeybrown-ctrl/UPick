import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import TinderCard from 'react-tinder-card';

function WePickedCard(props) {

    const { results } = props;

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
            height: '80vh',
            
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
            maxWidth: '200px',
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

        linkDiv: {
            justifyContent: 'center'
        }
    };

    return(
        <div className='gradient'>
            <div style={styles.cardDiv}>
                <Card style={styles.card}>
                    <h6 style={styles.h5}>Oh no, looks like you couldn't agree so...</h6>
                    <h1 style={styles.h1}>We Picked!</h1>
                    <div style={styles.imgDiv}>
                        <img 
                            fluid
                            style={styles.cardImg}
                            alt={'We Picked'}
                            src={results.URL} />
                    </div>
                    <br/>
                    <h4 style={styles.h4}>{results.Name}</h4>
                    <div style={styles.linkDiv}>
                        <Link to= '/startpick'>
                            <Button style={styles.btn2}>Pick Again</Button>
                        </Link> 
                        <Link to= '/profile'> 
                            <Button style={styles.btn2}>I'm Done</Button>
                        </Link>  
                    </div>

                </Card>
            </div>

        </div>
    );
}

export default WePickedCard;