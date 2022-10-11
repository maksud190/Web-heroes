import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='backGround py-2 mt-5'>
            <div className='m-5'>
                <h2>What is the purpose of React Router?</h2>
                <p>Answer: React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL .</p>
            </div>
            <div className='m-5'>
                <h2>How does Context Api work?</h2>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='m-5'>
                <h2>What is useRef?</h2>
                <p>The useRef Hook allows you to persist values between renders . It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>

        </div>
    );
};

export default Blogs;