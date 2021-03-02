import React from 'react';
import ReactCardCarousel from 'react-card-carousel';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

function FunctionCarousel() {
    const styles = {
        containerStyle: {
            position: 'relative',
            height: '50vh',
            width: '100%',
            display: 'flex',
            flex: 1,
            background: 'none',
            justifyContent: 'center',
            alignItems: 'middle',
            autoplaySpeed: '12000',
            disableBoxShadow: 'false',
            borderRadius: '40px'
        },
 
        cardStyle: {
            height: '400px',
            width: '250px',
            paddingTop: '60px',
            textAlign: 'center',
            background: '#ffff',
            color: '#FFF',
            fontFamily: 'sans-serif',
            fontSize: '12px',
            textTransform: 'uppercase',
            borderRadius: '10px',
            boxSizing: 'border-box',
        },

        image: {
            height: '430px',
            width: '225px',
            borderRadius: '20px',
        }
    };

    return (
        <div style={styles.containerStyle}>
            <Container id="Functionality">
                <ReactCardCarousel autoplay={true}>
                    <Image style={styles.image} src="../../assets/SignUpMobile.png"/>
                    <Image style={styles.image} src="../../assets/ProfileMobile.png"/>
                    <Image style={styles.image} src="../../assets/SetPickMobile.png"/>
                    <Image style={styles.image} src="../../assets/StartPickMobile.png"/>
                    <Image style={styles.image} src="../../assets/PickMobile.png"/>
                    <Image style={styles.image} src="../../assets/UPickedMobile.png"/>
                    <Image style={styles.image} src="../../assets/WePickedMobile.png"/>
                    <Image style={styles.image} src="../../assets/PreviousPicksMobile.png"/>
                    <Image style={styles.image} src="../../assets/LoginMobile.png"/>
                </ReactCardCarousel>
            </Container>
        </div>
    );
}

export default FunctionCarousel;