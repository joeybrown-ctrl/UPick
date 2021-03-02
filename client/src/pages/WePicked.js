import WePickedCard from '../components/WePickedCard';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// this page will be where the user is redirected after voting
// get activities for event, including votes

function WePicked() {
    const [results, setResults] = useState([]);
    const { eventId } = useParams();
    useEffect(() => {
        setInterval(() => fetchVotes(),5000);
    },[]);
    function fetchVotes() {
        axios.get(`/api/activity/${eventId}`).then(({ data }) => {
            // const yesVotes = [];
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
            }).sort((a,b) => b.total.yes - a.total.yes);
            setResults(transformedVotes);
        });
    }

    const styles = {

        cardDiv: {
            marginTop: '2vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            height: '100vh',
        },

        card: {
            // width: '18rem',
            padding: '150px',
            backgroundColor: 'transparent',
            border: '0',
            // justifyContent: 'center',
            height: '80vh',
            
        },

        spinnerDiv: {
            justifyContent: 'center'
        }
    };

    return(
        <>
            {results.length > 0 ? <WePickedCard results={results[2]} /> : 
                <div className='gradient'>
                    <div style={styles.cardDiv}>
                        <Card style={styles.card}>
                            <div style={styles.spinnerDiv}>
                                <Spinner animation="border" role="status" variant="light" size="xl">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>
                            </div>
                        </Card>
                    </div>
                </div>} 

        </>
    );
}
export default WePicked;