import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Button, Image } from 'react-bootstrap';
import Search from '../Search/Search';

function FriendList() {

    const [friends, setFriends] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {

        axios
            .get('/api/users/')
            .then(response => {
                show(response);
            })
            .catch(error => {
                show(error);
            });

    }, []);

    function show(response) {
        setFriends(
            response.data
        );
    }

    const searchHandler = (value) => {
        setSearch(value);
    };

    const updateFriends = friends.filter(friends => {
        return friends.email.toLowerCase().includes(search);
    }, []);

    const styles = {

        friendDiv: {
            margin: '20px'
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

    };

    return (
        <div>
            <Search searchHandler={searchHandler} />
            {(search === '' ? friends : updateFriends).map(({ id, email }) => (
                <Row style={styles.friendDiv}>
                    <Col xs={1} style={styles.iconCol}>
                        <Image style={styles.icon} src="./assets/friendicon.png" rounded />
                    </Col>
                    <br />
                    <Col>
                        <Button key={id} block style={styles.friendBtn}>{email}</Button>
                    </Col>
                </Row>
            ))
            }
            <br />
        </div>

    );

}

export default FriendList;
