import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const navigate= useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const updateEmail = (event) => {
    setEmail(event.target.value);
  };
  
  const updatePassword = (event) => {
      setPassword(event.target.value);
  };

  const signIn=()=>{
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const pic = user.photoURL;
        console.log(user)
        navigate("home/dashboard",  {replace:true});
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  }

  return(
    <div>
          <input type='email' placeholder="Email" value={email} onChange={updateEmail}/><br/>
          <input type='password' placeholder="password" value={password} onChange={updatePassword}/><br/>
          <input type='submit' value="Login" onClick={signIn}/>
      </div>
  );

}



// const user = auth.currentUser;
// if (user !== null) {
//   // The user object has basic properties such as display name, email, etc.
//   const displayName = user.displayName;
//   const email = user.email;
//   const photoURL = user.photoURL;
//   const emailVerified = user.emailVerified;

//   // The user's ID, unique to the Firebase project. Do NOT use
//   // this value to authenticate with your backend server, if
//   // you have one. Use User.getToken() instead.
//   const uid = user.uid;
// }