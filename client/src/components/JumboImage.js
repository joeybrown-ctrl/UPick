import React from 'react';
import Image from 'react-bootstrap/Image';
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Container from 'react-bootstrap/Container';


function JumboImage() {

    const styles = {
        jumboImg: {
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100%',
        }
    };

    return(
        <div>
            <Image src="../../assets/JumboImage.png" fluid style={styles.jumboImg} />
        </div>
    );
}

export default JumboImage;


