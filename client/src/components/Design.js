import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


function Design() {

    const styles = {

        root: {
            paddingTop: '60px',
        },

        header: {
            fontSize: '18pt',
            fontWeight: 'bold',
            color: '#1a2930'
        },

        jumboImg: {
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100%',
            paddingTop: '40px'
        }
    };    

    return(
        <div>
            <Container style={styles.root}>
                <Row>
                    <Col>
                        <p style={styles.header}>Design</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image src="../../assets/wireframe.png" fluid style={styles.jumboImg}></Image>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Design;