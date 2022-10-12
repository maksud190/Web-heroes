import React from 'react';

const Options = ({optiona}) => {

    const {options} = optiona;

    return (
        <div>
            <label className='mt-2'><input name="option" type='radio'></input>{options}</label>
        </div>
    );
};

export default Options;