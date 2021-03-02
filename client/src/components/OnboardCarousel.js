import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function OnboardCarousel() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const styles = {

        card: {
            backgroundColor: 'transparent',
            height: '100vh',
            textAlign: 'center'
        },

        cardDiv: {
            marginTop: '5vh',
        },

        title: {
            color: '#f9f9f9c9',
        },

        skipDiv: {
            color: '#f9f9f9c9',
            fontSize: '10pt',
            paddingBottom: '10px'
        },

        captionDiv: {
            paddingTop: '150px',
            fontSize: '10.5pt'
        }

    }; 

    return (
        <div className='gradient'>
            <div style={styles.cardDiv}>
                <Card xs={12} style={styles.card}>
                    <br/>
                    <h5 style={styles.title}>How UPick Works</h5>
                    <Link to='/profile'>
                        <p style={styles.skipDiv}>Skip for now.</p>
                    </Link>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <img
                                style={styles.mobile}
                                className="d-block w-100"
                                src="../../assets/SignupMobile.png"
                                alt="Signup"
                                fluid
                            />
                            <div style={styles.captionDiv}>
                                <Carousel.Caption>
                                    <p>Create an account by singing up. Already have an account, click login.</p>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={styles.mobile}
                                className="d-block w-100"
                                src="../../assets/ProfileMobile.png"
                                alt="Profile"
                                fluid
                            />
                            <div style={styles.captionDiv}>
                                <Carousel.Caption>
                                    <p>View your profile! Upload a profile picture, view previous picks, or start a new pick. </p>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={styles.mobile}
                                className="d-block w-100"
                                src="../../assets/SetPickMobile.png"
                                alt="Set Pick"
                                fluid
                            />
                            <div style={styles.captionDiv}>
                                <Carousel.Caption>
                                    <p>Choose a friend to start a pick with. </p>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={styles.mobile}
                                className="d-block w-100"
                                src="../../assets/StartPickMobile.png"
                                alt="Start Pick"
                                fluid
                            />
                            <div style={styles.captionDiv}>
                                <Carousel.Caption>
                                    <p>Select options to start your pick, grab location for local results. </p>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={styles.mobile}
                                className="d-block w-100"
                                src="../../assets/PickMobile.png"
                                alt="Voting"
                                fluid
                            />
                            <div style={styles.captionDiv}>
                                <Carousel.Caption>
                                    <p>Time to vote! Swipe right for choices you'd enjoy or left for no. You can also use the X and &hearts buttons to vote. </p>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={styles.mobile}
                                className="d-block w-100"
                                src="../../assets/UPickedMobile.png"
                                alt="UPicked Results"
                                fluid
                            />
                            <div style={styles.captionDiv}>
                                <Carousel.Caption>
                                    <p>Once all votes are cast see which choice UPicked with your friend. </p>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={styles.mobile}
                                className="d-block w-100"
                                src="../../assets/WePickedMobile.png"
                                alt="We Picked Results"
                                fluid
                            />
                            <div style={styles.captionDiv}>
                                <Carousel.Caption>
                                    <p>If you can't agree on a choice, no worries we will Pick! </p>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={styles.mobile}
                                className="d-block w-100"
                                src="../../assets/PreviousPicksMobile.png"
                                alt="Previous Picks"
                                fluid
                            />
                            <div style={styles.captionDiv}>
                                <Carousel.Caption>
                                    <p>Access your previous picks from the profile page. </p>
                                </Carousel.Caption>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Card>
            
            </div>

        </div>
    );
}

export default OnboardCarousel;