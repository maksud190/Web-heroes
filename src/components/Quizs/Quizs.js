import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactQuizes from '../ReactQuizes/ReactQuizes';

const Quizs = () => {

    const quizs = useLoaderData().data.questions;
    console.log(quizs);

    return (
        <div>
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