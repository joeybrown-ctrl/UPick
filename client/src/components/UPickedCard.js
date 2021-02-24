import { Card, Button } from 'react-bootstrap';
// import TinderCard from 'react-tinder-card';

function UPickedCard(props) {

    const { results } = props;
    // const ENABLED_COLOR = '#FBE18B';
    // const DISABLED_COLOR = '#FFD217';

    const styles = {

        cardDiv: {
            marginTop: '10vh',
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
            height: '66vh',
            
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

        },

        // btn1Hover: {
        //     margin: '10px 20px',
        //     background: '#FED215',
        //     border: 'none',
        //     color: '#1a2930',
        //     fontWeight: 'bold',
        //     fontSize: '15pt',
        //     letterSpacing: '2px',
        // },

        btn2: {
            margin: '10px 20px',
            background: '#FED215',
            border: 'none',
            color: '#1a2930',
            fontWeight: 'bold',
            fontSize: '15pt',
            letterSpacing: '2px'
        }

    };


    return(
        <div className='gradient'>
            <div style={styles.cardDiv}>
                {results.map(result => {
                    return (
                        <div>
                            <h2>{result.Name}</h2>
                            <img src={result.URL} />
                        </div>
                    );
                })}
                <Card style={styles.card}>
                    {/* <br/> */}
                    <h5 style={styles.h5}>Congrats!</h5>
                    <h1 style={styles.h1}>UPicked!</h1>
                    <div style={styles.imgDiv}>
                        <img 
                            fluid
                            style={styles.cardImg}
                            alt={'Your Pick'}
                            src={'../assets/fooddefault.png'} />
                    </div>
                    <br/>
                    <h4 style={styles.h4}>Default Pick Choice</h4>
                    <Button style={styles.btn1}>Send RSVP</Button>
                    <Button style={styles.btn2}>I'm Done</Button>

                </Card>
            </div>

        </div>
    );
}

export default UPickedCard;

