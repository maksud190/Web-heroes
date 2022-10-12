import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactQuizes from '../ReactQuizes/ReactQuizes';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quizs = () => {

    const quizs = useLoaderData().data.questions;
    const name = useLoaderData().data.name;
    // console.log(quizs);

    const handleAnswer = (id) => {
        toast(id);
    }
    
    // const handleAnsOption = (id) => {
    //     // console.log(id);
    //     if(id === quizs.correctAnswer){
    //         console.log('correct');
    //     }
    // }

    return (


        <div className='text-center mt-5'>
            <h1>Quiz of: {name}</h1>
            {
                quizs.map(quiz => <ReactQuizes
                    key={quiz.id}
                    quiz={quiz}
                    handleAnswer={handleAnswer}
                    // handleAnsOption={handleAnsOption}
                ></ReactQuizes>)
            }
        </div>
    );
};

export default Quizs;