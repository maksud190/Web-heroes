import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const ReactQuizes = ({ quiz }) => {

    const { question, options } = quiz;

    return (
        <div>
            <div className='container p-5 mt-4 border border-danger'>
                <FontAwesomeIcon icon="faEyeSlash"></FontAwesomeIcon>
                <h4>{question}</h4>

                <div className='d-flex flex-column mt-3'>
                    {
                        options.map(option => <label className='mt-2'><input type='radio'></input>{option}</label>)
                    }
                </div>
            </div>

        </div>
    );
};

export default ReactQuizes;