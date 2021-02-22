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
        setInterval(() => fetchVotes(),10000);
    },[]);
    function fetchVotes() {
        axios.get(`/api/activities/${eventId}`).then(({ data }) => {
            const transformedVotes = data.map(activity => {
                const total = {
                    yes: 0,
                    no: 0
                };
                activity?.Votes.forEach(vote => {
                    if (vote.status) {
                        total.yes++;
                    } else if (!vote.status) {
                        total.no++;
                    }
                });
                return {
                    total,
                    Name: activity.Name,
                    URL: activity.URL
                };
            });
            setResults(transformedVotes);
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

