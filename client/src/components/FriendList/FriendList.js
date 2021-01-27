import React, { Component } from 'react';
import axios from 'axios'
import { Row, Col, Button, Image } from 'react-bootstrap';

class FriendList extends Component {

    state= {
        user: []
    };

    componentDidMount() {
        axios
        .get('/api/users/:id')
        .then(response => {
            this.show(response);
        })
        .catch(error => {
            this.show(error);
        });
    }

    show(response) {
        this.setState({
            User: response.data.email
        })
    }

    styles = {

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

    };

    render(){

        console.log(this.state.user[0]);

    return(
        <div>
            <Row>
                <Col xs={1} style={styles.iconCol}>
                    <Image style={styles.icon}src="./assets/friendicon.png" rounded />
                </Col>
                <br/>
                <Col >
                {this.state.user.map(({id, email}) => (
                    <Button key={id} block style={styles.friendBtn}>{email}</Button>
                ))
                }   
                </Col>
            </Row>
            <br/>
            </div>

    );
}
}

export default FriendList;
