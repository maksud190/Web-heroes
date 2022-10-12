import './ReactQuizes.css';
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer } from 'react-toastify';

const ReactQuizes = ({ quiz, handleAnswer }) => {

    console.log(quiz);
    const { question, options, id, correctAnswer } = quiz;


    return (
        <div>
            <div className='container p-5 mt-4 border border-danger'>

                <button onClick={()=> handleAnswer(correctAnswer)} className="eyIcon"><EyeIcon /></button>
                <ToastContainer />
                <h4>{question}</h4>

                <div className='d-flex flex-column mt-3'>
                    {
                        options.map(option => <label className='mt-2'><input name="option" type='radio'></input>{option}</label>)
                    }
                </div>
            </div>

        </div>
    );
};

export default ReactQuizes;