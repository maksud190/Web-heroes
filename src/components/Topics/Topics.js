import React from 'react';
import { Link } from 'react-router-dom';

const Topics = ({topic}) => {
    
    const {name, logo, id} = topic;

    return (
        <div>
            <img src={logo} alt="" />
            <Link to={`/quiz/${id}`}><button>Click me</button></Link>
        </div>
    );
};

export default Topics;