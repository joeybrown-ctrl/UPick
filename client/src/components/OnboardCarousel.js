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
            fontSize: '10pt'
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
                                src="../../assets/Mobile.png"
                                alt="First slide"
                                fluid
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={styles.mobile}
                                className="d-block w-100"
                                src="../../assets/Mobile.png"
                                alt="First slide"
                                fluid
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={styles.mobile}
                                className="d-block w-100"
                                src="../../assets/Mobile.png"
                                alt="First slide"
                                fluid
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={styles.mobile}
                                className="d-block w-100"
                                src="../../assets/Mobile.png"
                                alt="First slide"
                                fluid
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={styles.mobile}
                                className="d-block w-100"
                                src="../../assets/Mobile.png"
                                alt="First slide"
                                fluid
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={styles.mobile}
                                className="d-block w-100"
                                src="../../assets/Mobile.png"
                                alt="First slide"
                                fluid
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={styles.mobile}
                                className="d-block w-100"
                                src="../../assets/Mobile.png"
                                alt="First slide"
                                fluid
                            />
                        </Carousel.Item>
                    </Carousel>
                </Card>
            
            </div>

        </div>
    );
}

export default OnboardCarousel;