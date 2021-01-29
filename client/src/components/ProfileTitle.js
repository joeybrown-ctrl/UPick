import { Card } from 'react-bootstrap';
import React from 'react';
import useAuth from '../hooks/auth';

const ProfileTitle = () => {
    const { user } = useAuth();

    const styles = {

        text: {
            color: '#c5c1c0'
        }
    };


    return (
        <Card.Title style={styles.text}>{user.email}</Card.Title>
    );
};

export default ProfileTitle;

