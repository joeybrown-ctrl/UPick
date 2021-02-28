import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Button, Image } from 'react-bootstrap';
import Search from './Search/Search';
import useFriends from '../hooks/useFriends';

function FriendList() {

    const [friends, setFriends] = useState([]);
    const [search, setSearch] = useState('');

    
    const [friendChoice, setFriendChoice] = useFriends();

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

    const handleFriendChange = email => {
        setFriendChoice([...new Set([...friendChoice, email])]);
    };

    const styles = {

        friendDiv: {
            margin: '10px'
        },

        icon: {
            width: '40px',
            height: '40px'
        },

        iconCol: {
            paddingLeft: '5px',
            paddingRight: '20px',
            margin: 'auto',
            width: 'auto',
        },

        friendBtn: {
            textAlign: 'left',
            backgroundColor: '#212f35',
            color: '#f9f9f9c9',
            border: '0 solid #FFD217',
            fontSize: '10.8pt'
        }

    };

    return (
        <div>
            <Search searchHandler={searchHandler}/>
            {(search === '' ? friends: updateFriends).map(({id, email}) => (
                <Row style={styles.friendDiv}>
                    <Col xs={2} style={styles.iconCol}>
                        <Image style={styles.icon} src="./assets/friendicon.png" rounded />
                    </Col>
                    <br/>
                    <Col xs={10}>  
                        <Button key={id} value={email} style={styles.friendBtn} onClick={ () => handleFriendChange(email)} block>{email}</Button>
                    </Col>
                </Row>
            ))
            }
            <br />
        </div>

    );

}

export default FriendList;
