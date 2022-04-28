import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export default function SignUp(){
    const [lname, setLname] = React.useState("");
    const [fname, setFname] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [confirmed, setConfirmed] = React.useState('mismatch');
    const navigate = useNavigate();

    const updateEmail = (event) => {
        setEmail(event.target.value);
    };
      
    const updatePassword = (event) => {
        setPassword(event.target.value);
    };
    const updateLname = (event) => {
        setLname(event.target.value);
    };
    const updateFname = (event) => {
        setFname(event.target.value);
    };

    const passwordConfirm = (event) => {
        setConfirmPassword(event.target.value);
    };

    const checkmatch = () =>{
        setConfirmed(password == confirmPassword  && (password!="" && confirmPassword !="")? 'match': 
        password != confirmPassword  && (password!="" && confirmPassword !="")? 'mismatch': "blank");
        console.log(confirmed);
    }

    React.useEffect(() => {
        console.log(password)
        console.log(confirmPassword)
        checkmatch();
      }, [confirmPassword, confirmed]);

    const createuser=(e)=>{
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            user.displayName = fname + lname;
            user.phoneNumber = "+233551540686";
            console.log(user);
            navigate("/begin", {replace:true});
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
            <input type='email' placeholder="Last Name" value={lname} onChange={updateLname}/><br/>
            <input type='email' placeholder="First Name" value={fname} onChange={updateFname}/><br/>
            <input type='email' placeholder="Email" value={email} onChange={updateEmail}/><br/>
            <input type='password' placeholder="password" value={password} onChange={updatePassword}/><br/>
            <input type='password' placeholder="confirm password" value={confirmPassword} onChange={passwordConfirm}/><br/>
            <p>{ confirmed=='mismatch'? 'doesn\'t match': confirmed=='match'? 'matches': ''}</p>
            <input type='submit' value="Signup" onClick={createuser}/>
        </div>
    );


}