import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Functionality() {

    const styles = {

        root: {
            paddingTop: '60px',
        },

        header: {
            fontSize: '18pt',
            fontWeight: 'bold',
            color: '#1a2930'
        },

        spanHeader: {
            fontSize: '16pt',
            fontWeight: 'bold',
            color: '#1a2930'
        },

        text: {
            fontSize: '16pt'
        }
    };

    return(
        <div>
            <Container style={styles.root}>
                <Row>
                    <Col>
                        <p style={styles.header}>How UPick Works</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p style={styles.text}><span style={styles.spanHeader}>Login | </span>The user has the option to Login to an existing account or Signup for a new one. </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p style={styles.text}><span style={styles.spanHeader}> Manage Profile | </span> After a successful Login, the user will be directed to their profile page. Here they can view/edit personal information, update profile image, view previous picks, and begin a new UPick session.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p style={styles.text}><span style={styles.spanHeader}>Friend Invite | </span> The first step to start a UPick is to select a friend by email.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p style={styles.text}><span style={styles.spanHeader}>Select Pick Options | </span> The user will then select the activity they'd like to vote on. To receive local results the user must allow their location to be accessed.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p style={styles.text}><span style={styles.spanHeader}>Vote | </span> The user will then receive an variety of choices to vote on. For choices they would want, users can "Swipe Right" or use the "Heart Icon". Similarly the user can "Swipe Left" or use the "X Icon" to vote against that choice. After the user has voted on their selections, they will be redirected to see UPicked results. </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p style={styles.text}><span style={styles.spanHeader}>Results | </span> User voted, but UPicked it! Here the user will see what choice was both agreed upon between users. They can confirm the choice by sending a RSVP. If they are not happy with the choice they can also start UPick over again. </p>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Functionality;