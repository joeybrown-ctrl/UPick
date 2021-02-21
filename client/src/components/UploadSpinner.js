import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


export default () =>
    <div className='rolling'>
        <div className='spinner fadein'>
            <FontAwesomeIcon icon={faSpinner} size='5x' color='#1D3C4C' />
        </div>
    </div>;