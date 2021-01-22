import React, { useState, useEffect } from 'react';
import { Header, Spinner } from 'react-bootstrap';
import Signup from './Signup';

function Loading() {
    const [loading, setLoading]= useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 5000);
    }, []);

    return(
        <>
            {loading === false ? (
                <div className='Loading'>
                    <Header className='Load-Header'>
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </Header>
                </div>
            ): (
                <Signup/>
            )}
        </>
    );
}

export default Loading;