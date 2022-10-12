import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';
import './Home.css';

const Home = () => {

    const topics = useLoaderData().data;
console.log(topics);
    return (
        <div>
            <div className='heading'>
                <h1>Start your Web Development with best website</h1>
                <p><small>Be Confident</small></p>
            </div>
            <div className='containerStyle d-flex'>
            {
                topics.map(topic => <Topics
                        key={topic.id}
                        topic={topic}
                    ></Topics>)
            }
            </div>
            
            
        </div>
    );
};

export default Home;