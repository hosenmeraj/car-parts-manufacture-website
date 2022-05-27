import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id=" dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <!-- Page content here --> */}
                <h1 className='text-primary text-2xl'>Welcome to Dashboard</h1>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for=" dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Order</Link></li>
                    <li><Link to="/dashboard/reviews">Reviews</Link></li>
                    <li><Link to="/dashboard/profile">My profile</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default DashBoard;