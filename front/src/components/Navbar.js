import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Navbar = () => {
    return (
        <nav >
                <ul>
                    <li>
                        <Link to="/">
                            <a href="#">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/books">
                            <a href="#">Books</a>
                        </Link>
                    </li>
                </ul>
        </nav>
    )
}

export default Navbar;