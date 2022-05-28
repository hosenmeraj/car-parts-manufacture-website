import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth)
    const logOut = () => {
        signOut(auth)
        localStorage.removeItem("accessToken")
    }
    const menubar = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/tools'>Tools</NavLink></li>
        <li><NavLink to='/bussiness'>Bussiness</NavLink></li>
        <li><NavLink to='/reviews'>Reviews</NavLink></li>
        {
            user && <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        }
        <li>{user ? <button onClick={logOut} className='btn btn-ghost'>Sign Out</button>
            : <NavLink to='/login'>login</NavLink>
        }</li>
    </>
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menubar}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">MaxWheel</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menubar}
                </ul>
            </div>
            <div className="navbar-end">
                <label for=" dashboard-sidebar" tabIndex="1" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                {/* <label class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
            </div>
        </div>
    );
};

export default Navbar;