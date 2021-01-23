import './style.css';
import { Button } from 'react-bootstrap';

function Begin() {

    return (
        <div className='gradient'>
            <Button className='begin shadow p-3 mb-5' variant='warning' size='lg'>
            Get Started
            </Button>  
        </div>
    );
}

export default Begin;

