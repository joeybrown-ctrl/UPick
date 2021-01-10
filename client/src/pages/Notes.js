import { useEffect, useState } from 'react';
import axios from 'axios';
import NoteForm from '../components/NoteForm';

const Notes = function () {
    const [notes, setNotes] = useState([]);
    // so we can refresh the Page *after* we get a response back from the server on our new note!
    const [refresh, toggleRefresh] = useState(0);
    const refreshParent = () => {
        toggleRefresh(refresh + 1);
    };

    // Notice deps has refresh in there - this way when it increments from someone submitting
    // it calls fetch notes again.
    useEffect(() => {
        fetchNotes();
    }, [refresh]);

    // Check out that include!
    async function fetchNotes() {
        const { data } = await axios.get('/api/notes?include=User');
        setNotes(data);
    }
    return (
        <div>
            <h2>Notes</h2>
            <ol>
                {notes.map(note => {
                    return (
                        <li key={note.id}>
                            <strong>{note.title}</strong> {note.body} <sub>from: {note.User.email}</sub>
                        </li>
                    );
                })}
            </ol>
            <NoteForm didSubmit={refreshParent} />
        </div>
    );
};

export default Notes;