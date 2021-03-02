import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


function Design() {

    const styles = {

        root: {
            paddingTop: '60px',
            paddingBottom: '50px'
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
        },

        text: {
            fontSize: '16pt'
        },

        overview: {
            paddingTop:'40px'
        }
    };    

    return(
        <div>
            <Container id="Design" style={styles.root}>
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
                <Row style={styles.overview}>
                    <Col>
                        <p style={styles.text}>
                            UPick was built for mobile users. Above you will see the wireframe built during the planning stages of this application. We wanted the design on this application to be simple, visually pleasing, with great user interaction.
                        </p>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <Image src="../../assets/branding.png" fluid style={styles.jumboImg}></Image>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Design;