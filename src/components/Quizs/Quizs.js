import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactQuizes from '../ReactQuizes/ReactQuizes';

const Quizs = () => {

    const quizs = useLoaderData().data.questions;
    const name = useLoaderData().data.name;
    // console.log(name.name);

    return (
        <div className='text-center mt-5'>
            <h1>Quiz of: {name}</h1>
            {
                quizs.map(quiz => <ReactQuizes
                        key={quiz.id}
                        quiz={quiz}
                    ></ReactQuizes>)
            }
        </div>
    );
};

export default Quizs;