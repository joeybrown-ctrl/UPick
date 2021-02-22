import UPickedCard from '../components/UPickedCard';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// this page will be where the user is redirected after voting
// get activities for event, including votes

function YouPicked() {
    const [results, setResults] = useState([]);

    const { eventId } = useParams();
    useEffect(() => {
        setInterval(() => fetchVotes(), 10000);
    });

    function fetchVotes() {
        axios.get(`/api/activities/${eventId}`).then(({ data }) => {
            setResults(data);
        });
    }


    return(
        <>
            {JSON.stringify(results)}
            <UPickedCard/>
        </>
    );
}

export default YouPicked;

