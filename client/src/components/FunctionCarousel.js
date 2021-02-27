import React from 'react';
import ReactCardCarousel from 'react-card-carousel';
import Image from 'react-bootstrap/Image';

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
            height: '400px',
            width: '225px',
            borderRadius: '20px',
        }
    };

    return (
        <div style={styles.containerStyle}>
            <ReactCardCarousel autoplay={true}>
                <Image style={styles.image} src="../../assets/Mobile.png"/>
                <Image style={styles.image} src="../../assets/Mobile.png"/>
                <Image style={styles.image} src="../../assets/Mobile.png"/>
                <Image style={styles.image} src="../../assets/Mobile.png"/>
                <Image style={styles.image} src="../../assets/Mobile.png"/>
                <Image style={styles.image} src="../../assets/Mobile.png"/>
            </ReactCardCarousel>
        </div>
    );
}

export default FunctionCarousel;