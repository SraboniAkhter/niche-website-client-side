import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../hooks/useAuth';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const Sidebar = () => {
    const {user ,logOut} = useAuth();
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: '100%' }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faUser} /> <span>
                        { user?.email &&
              <span>{user.displayName}</span>
          }
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>

                { user?.email && <div>
                    <li>
                        <Link to="/manageAllOrders" className="text-white">
                            <FontAwesomeIcon icon={faCalendar} /> <span>Manage All Orders</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/myOrders" className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <span>My Orders</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addServices" className="text-white" >
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Services</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addReview" className="text-white" >
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Review</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/doctor/setting" className="text-white" >
                            <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                        </Link>
                    </li>
                </div>}
                {user?.email && <li className="nav-item">
          <button onClick={logOut} className="nav-link active ms-5 btn btn-light"><FontAwesomeIcon icon={faSignOutAlt} />logout</button>
        </li>}
            </ul>
        </div>
    );
};

export default Sidebar;