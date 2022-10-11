import React from 'react';

const ReactQuizes = ({ quiz }) => {

    const { question, options } = quiz;

    return (
        <div>
            <div className='container p-5 mt-5 border'>
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