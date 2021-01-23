import './style.css';
import { Col, Card, Row, Form, FormControl, InputGroup, Image, Button } from 'react-bootstrap';


function Friend() {

    const styles = {
        card: {
            // width: '22rem',
            width: '100%',
            height: 'auto',
            padding: '20px',
            backgroundColor: 'transparent',
            // border: '0',
            justifyContent: 'center',
            overflowY: 'scroll'
        },

        search: {
            backgroundColor: '#FFD217',
            border: '0',
            color: '#1a2930',
            borderRadius: '0px 5px 5px 0px'
        },

        bar: {
            backgroundColor: '#212f35',
            color: '#f9f9f9c9',
            border: '0'
        },

        icon: {
            width: '40px',
            height: '40px'
        },

        iconCol: {
            paddingRight: '40px'
        },

        friendBtn: {
            textAlign: 'left',
            backgroundColor: '#212f35',
            color: '#f9f9f9c9',
            border: '0 solid #FFD217'
        },

        pick: {
            backgroundColor: '#FFD217',
            border: '0',
            color: '#1a2930'
        }
    };


    return(
        <div className='gradient'>
            <div className='card-div'>
                <Card style={styles.card}>
                    <h5 className='title'>Choose A Friend</h5>
                    <Form inline>                
                        <InputGroup>
                            <FormControl
                                style={styles.bar}
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            /> 
                            <InputGroup.Prepend>
                                <InputGroup.Text style={styles.search}><i class="fas fa-search search-link"></i></InputGroup.Text>
                            </InputGroup.Prepend>
                            
                        </InputGroup>
                    </Form>
                    <br/>
                    <div className="friend-list">
                        <Row>
                            <Col xs={1} style={styles.iconCol}>
                                <Image style={styles.icon}src="./assets/friendicon.png" rounded />
                            </Col>
                            <br/>
                            <Col >
                                <Button block style={styles.friendBtn} >Friend Name</Button>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col xs={1} style={styles.iconCol}>
                                <Image style={styles.icon}src="./assets/friendicon.png" rounded />
                            </Col>
                            <br/>
                            <Col >
                                <Button block style={styles.friendBtn} >Friend Name</Button>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col xs={1} style={styles.iconCol}>
                                <Image style={styles.icon}src="./assets/friendicon.png" rounded />
                            </Col>
                            <br/>
                            <Col >
                                <Button block style={styles.friendBtn} >Friend Name</Button>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col xs={1} style={styles.iconCol}>
                                <Image style={styles.icon}src="./assets/friendicon.png" rounded />
                            </Col>
                            <br/>
                            <Col >
                                <Button block style={styles.friendBtn} >Friend Name</Button>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col xs={1} style={styles.iconCol}>
                                <Image style={styles.icon}src="./assets/friendicon.png" rounded />
                            </Col>
                            <br/>
                            <Col >
                                <Button block style={styles.friendBtn} >Friend Name</Button>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col xs={1} style={styles.iconCol}>
                                <Image style={styles.icon}src="./assets/friendicon.png" rounded />
                            </Col>
                            <br/>
                            <Col >
                                <Button block style={styles.friendBtn} >Friend Name</Button>
                            </Col>
                        </Row>
                        <br/>
                        <Button style={styles.pick} type='submit' block>Start Your Pick</Button>
                        <br/>
                        <p className='invite'>Invite A Friend</p>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Friend;