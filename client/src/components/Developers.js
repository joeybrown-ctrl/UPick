import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


function Developers() {

    const styles = {

        root: {
            paddingTop: '60px',
            paddingBottom: '175px'
        },

        header: {
            fontSize: '18pt',
            fontWeight: 'bold',
            color: '#1a2930'
        },

        headshot: {
            width: '250px',
            height: '250px',
            borderRadius: '40px',
            // paddingBottom: '20px'

        },

        headshotCol: {
            paddingBottom: '20px'
        },

        text: {
            fontSize: '14pt'
        },

        icon: {
            justifyContent: 'space-between',
        },

        link: {
            color: '#1a2930'
        }

    };

    return(
        <div>
            <Container style={styles.root}>
                <Row>
                    <Col>
                        <p style={styles.header}>Developers</p>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col style={styles.headshotCol} xs={12} sm={6} lg={4}>
                        <Image style ={styles.headshot} src="../../assets/JBrownPic.jpg" fluid ></Image>
                    </Col>
                    <Col xs={12} sm={6} lg={4}>
                        <p style={styles.header}>George Joseph Brown</p>
                        <p style={styles.text}>UPick Role | Back and Front End Development</p>
                        <p style={styles.text}>Full Stack MERN Developer. Passionate about the balance between design and functionality.</p>
                    </Col>
                    <Col xs={12} sm={12} lg={4}>
                        <p style={styles.header}>Connect</p>
                        <Row>
                            <Col xs={3}>
                                <a style={styles.link} href="https://github.com/joeybrown-ctrl"><i class="fab fa-github fa-3x"></i></a>
                            </Col>
                            <Col xs={3}>
                                <a style={styles.link} href="https://www.linkedin.com/in/george-joseph-brown/"><i class="fab fa-linkedin fa-3x"></i></a>
                            </Col>
                            <Col xs={3}>
                                <a style={styles.link} href="https://joeybrown-ctrl.github.io/portfolio-react/#/"><i class="fas fa-briefcase fa-3x"></i></a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br/>
                <br/>
                <Row>
                    <Col style={styles.headshotCol} xs={12} sm={6} lg={4}>
                        <Image style ={styles.headshot} src="../../assets/CFloresPic.jpg" fluid ></Image>
                    </Col>
                    <Col xs={12} sm={6} lg={4}>
                        <p style={styles.header}>Christina Flores</p>
                        <p style={styles.text}>UPick Role | Front End Development, UI, Graphic Design</p>
                        <p style={styles.text}>Full Stack Developer. Instills a "big picture" mindset to build more intuitive and beautiful application frameworks.</p>
                    </Col>
                    <Col xs={12} sm={12} lg={4}>
                        <p style={styles.header}>Connect</p>
                        <Row>
                            <Col xs={3}>
                                <a style={styles.link} href="https://github.com/cdflori"><i class="fab fa-github fa-3x"></i></a>
                            </Col>
                            <Col xs={3}>
                                <a style={styles.link} href="https://www.linkedin.com/in/christina-flores-49687182/"><i class="fab fa-linkedin fa-3x"></i></a>
                            </Col>
                            <Col xs={3}>
                                <a style={styles.link} href="https://cdflori.github.io/"><i class="fas fa-briefcase fa-3x"></i></a>                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br/>
                <br/>
                <Row>
                    <Col style={styles.headshotCol} xs={12} sm={6} lg={4}>
                        <Image style ={styles.headshot} src="../../assets/SLoGreco.png" fluid ></Image>
                    </Col>
                    <Col xs={12} sm={6} lg={4}>
                        <p style={styles.header}>Shoshanah Lo Greco</p>
                        <p style={styles.text}>UPick Role | Front End Development</p>
                        <p style={styles.text}>Full Stack Developer. Creates life-enhancing user experiences while collaborating with others to develop meaningful content</p>
                    </Col>
                    <Col xs={12} sm={12} lg={4}>
                        <p style={styles.header}>Connect</p>
                        <Row>
                            <Col xs={3}>
                                <a style={styles.link} href="https://github.com/slogreco"><i class="fab fa-github fa-3x"></i></a>
                            </Col>
                            <Col xs={3}>
                                <a style={styles.link} href="https://www.linkedin.com/in/shoshanahlogreco/"><i class="fab fa-linkedin fa-3x"></i></a>
                            </Col>
                            <Col xs={3}>
                                <a style={styles.link} href="https://shoshanahlogreco.com/"><i class="fas fa-briefcase fa-3x"></i></a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Developers;