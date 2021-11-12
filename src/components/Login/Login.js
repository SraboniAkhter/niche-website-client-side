
import React, { useState} from 'react';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Login.css';
import { Link ,useHistory , useLocation} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Login = () => {
    //  const { signInUsingGoogle } = useFirebase();
     const { signInUsingGoogle , handleLogInUser} = useAuth();
     const [email,setEmail] = useState({});
     const [password,setPassword] = useState({});
     const [error,setError] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location?.state?.from || '/home';


// email password holding on input.
    const handleEmailChange = e => {
      setEmail(e.target.value);

  }
  const handlePasswordChange = e => {
       setPassword(e.target.value);
  }
  // login submit button
  const handleLogin = () => {
    handleLogInUser(email, password)
    .then((result) => {
      history.push(redirect_uri);
    })
  }
// form submit
  const handleSubmit = e => {
    e.preventDefault();

}
// login with google
    const handleGoogleLogin = () => {
       signInUsingGoogle(location, history)
        // signInUsingGoogle()
        // .then((result) => {
        //   history.push(redirect_uri);
        // });
        // setError("");
    }
    
    return (
        <div className="mx-5 mt-5">
          <Navbar></Navbar>
            {/* login with form */}
 <form onSubmit={handleSubmit}>
     <h3 className="text-info">Please Login Here</h3>
  <div className="form-group row">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required placeholder="e-mail"/>
    </div>
  </div>
  <br />
  <div className="form-group row">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required placeholder="password"/>
    </div>
  </div>
  <br />
  <div className="form-group row">
    <div className="col-sm-10">
        <div className="row mb-3 text-danger">{error}</div>
        <br />
      <button onClick={handleLogin} type="submit" className="btn btn-info text-white">Login</button>
    </div>
  </div>
</form>

<br /> <br /> <br />

            {/* login with google */}
            <div>---------or----------</div>
            
            <button onClick={handleGoogleLogin} className="btn btn-info text-white"><FontAwesomeIcon className="icon me-2 text-white" icon={faGoogle} />SignIn with Google</button>
            <br />
            <Link className="text-info" to="/register">New User?</Link>
            <br /> <br /> <br />
            <Footer></Footer>
        </div>
    );
};

export default Login;















































































































































































































// import React, { useState} from 'react';
// import { faGoogle } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import './Login.css';
// import { Link ,useHistory , useLocation} from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';

// const Login = () => {
//     //  const { signInUsingGoogle } = useFirebase();
//      const { signInUsingGoogle , handleLogInUser} = useAuth();
//      const [email,setEmail] = useState({});
//      const [password,setPassword] = useState({});
//      const [error,setError] = useState('');
//     const location = useLocation();
//     const history = useHistory();
//     const redirect_uri = location?.state?.from || '/home';


// // email password holding on input.
//     const handleEmailChange = e => {
//       setEmail(e.target.value);

//   }
//   const handlePasswordChange = e => {
//        setPassword(e.target.value);
//   }
//   // login submit button
//   const handleLogin = () => {
//     handleLogInUser(email, password)
//     .then((result) => {
//       history.push(redirect_uri);
//     })
//   }
// // form submit
//   const handleSubmit = e => {
//     e.preventDefault();

// }
// // login with google
//     const handleGoogleLogin = () => {
//       // signInUsingGoogle(location, history)
//         signInUsingGoogle()
//         .then((result) => {
//           history.push(redirect_uri);
//         });
//         // setError("");
//     }
    
//     return (
//         <div className="mx-5 mt-5">
//             {/* login with form */}
//  <form onSubmit={handleSubmit}>
//      <h3 className="text-info">Please Login Here</h3>
//   <div className="form-group row">
//     <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
//     <div className="col-sm-10">
//       <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required placeholder="e-mail"/>
//     </div>
//   </div>
//   <br />
//   <div className="form-group row">
//     <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
//     <div className="col-sm-10">
//       <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required placeholder="password"/>
//     </div>
//   </div>
//   <br />
//   <div className="form-group row">
//     <div className="col-sm-10">
//         <div className="row mb-3 text-danger">{error}</div>
//         <br />
//       <button onClick={handleLogin} type="submit" className="btn btn-info text-white">Login</button>
//     </div>
//   </div>
// </form>

// <br /> <br /> <br />

//             {/* login with google */}
//             <div>---------or----------</div>
            
//             <button onClick={handleGoogleLogin} className="btn btn-info text-white"><FontAwesomeIcon className="icon me-2 text-white" icon={faGoogle} />SignIn with Google</button>
//             <br />
//             <Link className="text-info" to="/register">New User?</Link>
//             <br /> <br /> <br />
//         </div>
//     );
// };

// export default Login;