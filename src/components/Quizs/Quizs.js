import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizs = () => {

    const quizs = useLoaderData().data.questions;
    console.log(quizs);

    return (
        <div>
            <h2>QUIZES {quizs.map()}</h2>
        </div>
    );
};

export default Quizs;