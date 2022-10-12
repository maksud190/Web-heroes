import React from 'react';
import { Link } from 'react-router-dom';
import './Topics.css';

const Topics = ({ topic }) => {

    console.log(topic);
    const { name, logo, id, total } = topic;

    return (
        <div class="row g-0 pe-3 mobile-card">
            <div class="col">
                <div class="card cardStyle">
                    <img src={logo} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p><small>Total Quiz: {total}</small></p>
                        <Link to={`/quiz/${id}`}><button class="btn btn-primary">Start Quiz</button></Link>
                    </div>
                </div>
            </div>
        </div>




        // {/* <div class="card cardStyle">
        //     <img src={logo} class="card-img-top" alt=""/>
        //         <div class="card-body d-flex justify-content-between">

        //             <h5 class="card-text">{name}</h5>
        //             {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        //             <Link to={`/quiz/${id}`}><button class="btn btn-primary">Start Quiz</button></Link>
        //         </div>
        // </div> */}




        // <div className="card-size">
        //     <img src={logo} alt="" />
        //     <div className='d-flex justify-content-between details'>
        //         <p className='para'>{name}</p>
        //         <Link to={`/quiz/${id}`}><button>Click me</button></Link>
        //     </div>

        // </div>
    );
};

export default Topics;