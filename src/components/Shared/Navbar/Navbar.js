import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import useFirebase from '../../../hooks/useFirebase';
import logo from '../../../image/logo.png'

const Navbar = () => {
  const {user ,logOut} = useAuth();
  // const {user ,logOut} = useFirebase();
    return (
   <nav className="navbar navbar-expand-lg navbar-light">
       <div className="container">
    <Link className="navbar-brand" to="/">
      <img src={logo} alt=""  className="bg-info"
 width="200" height="34"/>
    </Link>
  </div>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link ms-5 active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active ms-5" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active ms-5" to="/product">More Products</Link>
        </li>
        {user?.email &&  <li className="nav-item">
          <Link className="nav-link active ms-5" to="/dashboard">Dashboard</Link>
        </li>
          }
        <li className="nav-item">
          <Link className="nav-link active ms-5" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active ms-5" to="/dashboard/myOrder">
          { user?.email &&
              <span>{user.displayName}</span>
          }
          </Link>
        </li>
        
        {user?.email && <li className="nav-item">
          <button onClick={logOut} className="nav-link active ms-5 btn btn-info">logout</button>
        </li>}
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Navbar;