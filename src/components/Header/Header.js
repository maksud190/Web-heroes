import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (

        <nav class="navbar navbar-expand-lg bg-pink container">
            <div class="container-fluid">
                <div>
                    <Link class="navbar-brand text-color" to="/">Web Heros</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link text-color" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-color" to="/">Topics</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-color" to="/statistics">Statistics</Link>
                            </li>
                            <li class="Blogs">
                                <Link class="nav-link text-color" to="/blogs">Blogs</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </nav>




        //{/* <nav >
        //<Link to='/'>Home</Link>
        //<Link to='/'>Topics</Link>
        //  <Link to='/statistics'>Statistics</Link>
        //    <Link to='/blogs'>Blogs</Link>
        // </nav> */}//
    );
};

export default Header;