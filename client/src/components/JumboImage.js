import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


function JumboImage() {

    const styles = {
        jumboImg: {
            backgroundImage: 'url(' + '../../assets/JumboImage.png' + ')',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',

            
        }
    };

    return(
        <Jumbotron style={styles.jumboImg} fluid>
            <Container>

            </Container>
        </Jumbotron>
        // <Image 
        //     // style={styles.jumbo} 
        //     src="../../assets/JumboImage.png" fluid/>
    );
}

export default JumboImage;


