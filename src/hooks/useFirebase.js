import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, getIdToken, GoogleAuthProvider ,createUserWithEmailAndPassword,onAuthStateChanged, signOut , updateProfile,signInWithEmailAndPassword} from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.initialize';

initializeAuthentication();



const useFirebase = () => {
    const [user,setUser] = useState({});
     const [isLoading,setIsLoading] = useState(true);
    const [error,setError] = useState('');
    const [admin, setAdmin] = useState(false);
     const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

   const signInUsingGoogle = (location, history) => {
    // console.log("hello")
     setIsLoading(true);
  return signInWithPopup(auth, googleProvider)
    // return signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      saveUser(user.email, user.displayName, 'PUT');
      setError('');
      const redirect_uri = location?.state?.from || '/';
      history.replace(redirect_uri);
  }).catch((error) => {
      setError(error.message);
  }).finally(() => setIsLoading(false));
   }
    
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        // console.log(user)
        setUser(user)
        getIdToken(user)
        .then(idToken => {
          setToken(idToken);
      })
      }
      else{
        setUser({})
      }
       setIsLoading(false)
    })
  },[])



  useEffect(() => {
    fetch(`https://arcane-harbor-29981.herokuapp.com/users/${user.email}`)
    // fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
}, [user.email])

  const logOut = () => {
    setIsLoading(true);
    const auth = getAuth();
signOut(auth)
.then(() => {
  setUser({})
})
 .finally(() => setIsLoading(false))
.catch((error) => {
})
  }
  // register
  const createIdWithEmailAndPassword = (email, password,name) => { 
    createUserWithEmailAndPassword(auth, email, password)
  .then((result) => {
    //  console.log(result.user);
            setError('');
         const newUser = { email, displayName: name };
         setUser(newUser);
         // save user to the database
         saveUser(email,name,'POST')
    updateProfile(auth.currentUser, {
      displayName: name})
      .catch((error) => {
    });

  })
  .catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage);
  });

  }
  const handleLogInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      console.log(result.user);
   
  })
  .catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage);
  });
  }
  // const saveUser = (email, displayName) => {
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('https://arcane-harbor-29981.herokuapp.com/users', {
    // fetch('http://localhost:5000/users', {
        // method: 'POST',
        method: method,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then()
}

    return {
      user,
      admin,
      token,
        error,
        signInUsingGoogle,
        createIdWithEmailAndPassword,
        handleLogInUser,
         logOut,
         isLoading
    };
};

export default useFirebase;





























































































// import { useEffect, useState } from 'react';
// import { getAuth, signInWithPopup, GoogleAuthProvider ,createUserWithEmailAndPassword,onAuthStateChanged, signOut , updateProfile,signInWithEmailAndPassword} from "firebase/auth";
// import initializeAuthentication from '../Firebase/firebase.initialize';

// initializeAuthentication();



// const useFirebase = () => {
//     const [user,setUser] = useState({});
//      const [isLoading,setIsLoading] = useState(true);
//     const [error,setError] = useState('');

//     const auth = getAuth();
//     const googleProvider = new GoogleAuthProvider();

//    const signInUsingGoogle = () => {
//     // console.log("hello")
//      setIsLoading(true);
//    signInWithPopup(auth, googleProvider)
//     // return signInWithPopup(auth, googleProvider)
//     .then((result) => {
//       const user = result.user;
//       saveUser(user.email, user.displayName, 'PUT');
//       setError('');
//       // const redirect_uri = location?.state?.from || '/';
//       // history.replace(redirect_uri);
//   }).catch((error) => {
//       setError(error.message);
//   }).finally(() => setIsLoading(false));
//    }
    
//   useEffect(() => {
//     onAuthStateChanged(auth, user => {
//       if (user) {
//         // console.log(user)
//         setUser(user)
//       }
//       else{
//         setUser({})
//       }
//        setIsLoading(false)
//     })
//   },[])

//   const logOut = () => {
//     setIsLoading(true);
//     const auth = getAuth();
// signOut(auth)
// .then(() => {
//   setUser({})
// })
//  .finally(() => setIsLoading(false))
// .catch((error) => {
// })
//   }
//   // register
//   const createIdWithEmailAndPassword = (email, password,name) => { 
//     createUserWithEmailAndPassword(auth, email, password)
//   .then((result) => {
//     //  console.log(result.user);
//             setError('');
//          const newUser = { email, displayName: name };
//          setUser(newUser);
//          // save user to the database
//          saveUser(email,name,'POST')
//     updateProfile(auth.currentUser, {
//       displayName: name})
//       .catch((error) => {
//     });

//   })
//   .catch((error) => {
//     const errorMessage = error.message;
//     setError(errorMessage);
//   });

//   }
//   const handleLogInUser = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password)
//     .then((result) => {
//       console.log(result.user);
   
//   })
//   .catch((error) => {
//     const errorMessage = error.message;
//     setError(errorMessage);
//   });
//   }
//   // const saveUser = (email, displayName) => {
//   const saveUser = (email, displayName, method) => {
//     const user = { email, displayName };
//     fetch('http://localhost:5000/users', {
//         // method: 'POST',
//         method: method,
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(user)
//     })
//         .then()
// }

//     return {
//       user,
//         error,
//         signInUsingGoogle,
//         createIdWithEmailAndPassword,
//         handleLogInUser,
//          logOut,
//          isLoading
//     };
// };

// export default useFirebase;