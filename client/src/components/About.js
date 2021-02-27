import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {

    const styles = {

        h2Row: {
            textAlign: 'center',
            width: '100%'
        },

        h2: {
            fontWeight: 'bold',
            fontSize: '25pt',
            paddingTop: '40px',
            paddingBottom: '20px',
            color: '#1a2930',
            
        },

        col: {
            fontSize: '17px',
            width: '100%',
        },

        header: {
            fontWeight: 'bold',
            color: '#1a2930',
        },

        overview: {
            paddingTop: '60px',
            paddingBottom: '60px'
        },

        ovHeader: {
            fontSize: '18pt',
            fontWeight: 'bold',
            color: '#1a2930'
        },

        ovText: {
            fontSize: '16pt'
        },

        spanText: {
            fontSize: '19pt',
            fontWeight: 'bold',
            color: '#f7ce3e'
        }

    };

    return (
        <div>
            <Container>
                <div style={styles.h2Row}>
                    <p style={styles.h2}>UPick</p>
                </div>
                <Row>
                    <Col style={styles.col}>
                        <p style={styles.header}>Application Type</p>
                        <p>Leisure, Cuisine, Entertainment</p>
                    </Col>
                    <Col style={styles.col}>
                        <p style={styles.header}>Technologies Used</p>
                        <p>JavaScript, React, MySQL/ORMs, Express, JawsDB</p>
                    </Col>
                    <Col style={styles.col}>
                        <p style={styles.header}>Timeline</p>
                        <p>Dec 19 - Feb 21</p>
                    </Col>
                    <Col style={styles.col}>
                        <p style={styles.header}>Developers</p>
                        <p>Joey Brown, Christina Flores, Shoshanah Lo Greco</p>
                    </Col>
                </Row>
                <Row>
                    <Col style={styles.overview}>
                        <p style={styles.ovHeader}>For indecisive users, "UPick helps make small decisions seem less like big decisions." </p>
                        <p style={styles.ovText}>The average American couple spends <span style={styles.spanText}>5.5 days</span> deciding on what to eat each year. That’s <span style={styles.spanText}>132</span> hours of hearing the dreaded, “What do you want to eat?” over and over. American consumers are already flooded with choices in every aspect of their lives, that when it comes to small but important decisions like what to eat or what to watch they shouldn’t let indecisiveness take up any more time than needed. </p>
                        <p style={styles.ovText}>As an indecisive user and consumer I want an application to help myself and others make quick decisions regarding what to eat and watch. </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;