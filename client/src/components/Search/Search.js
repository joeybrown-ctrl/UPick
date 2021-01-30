import { Form, FormControl, InputGroup } from 'react-bootstrap';
import './style.css';

const Search = ({ searchHandler }) => {
    const handleSearchInputChange = e => {
        searchHandler(e.target.value);
    };

    const styles= {

        search: {
            backgroundColor: '#FFD217',
            border: '0',
            color: '#1a2930',
            borderRadius: '0px 5px 5px 0px',
            marginBottom: '20px'
        },

        bar: {
            backgroundColor: '#212f35',
            color: '#f9f9f9c9',
            border: '0',
            marginBottom: '20px'
        }
    };


    return(

        <Form>                
            <InputGroup>
                <FormControl
                    style={styles.bar}
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                /> 
                <InputGroup.Prepend>
                    <InputGroup.Text onChange={handleSearchInputChange} type='text' style={styles.search}>
                        <i type='submit' className="fas fa-search search-link">
                        </i>
                    </InputGroup.Text>
                </InputGroup.Prepend>
                            
            </InputGroup>
        </Form>

    );};

export default Search;