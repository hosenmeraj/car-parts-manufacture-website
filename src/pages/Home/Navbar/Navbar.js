import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 px-20">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/tools'>Tools</NavLink></li>
                    <li><NavLink to='/bussiness'>Bussiness</NavLink></li>
                    <li><NavLink to='/reviews'>Reviews</NavLink></li>
                    <li><NavLink to='/login'>login</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;