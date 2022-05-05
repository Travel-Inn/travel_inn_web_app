import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {db} from './../../utils/firebase';
import { collection, getDocs } from "firebase/firestore"; 
import './Login.scss';
import PersonIcon from '@mui/icons-material/Person';
import TabTitle from '../../components/UI/TabTitle';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';




export default function Login() {
    const navigate= useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const updateEmail = (event) => {
        setEmail(event.target.value);
    };
    
    const updatePassword = (event) => {
        setPassword(event.target.value);
    };

    const signIn=(e)=>{
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            navigate("/dashboard",  {reload:true});
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
    }

    const checkPermission=()=>{
        let popup = document.getElementsByClassName('permissionPopup')[0];
        popup.style.display = "block";
    }
    const verify= async ()=>{
        const querySnapshot = await getDocs(collection(db, "admins"));
        querySnapshot.forEach((doc) => {
        if(doc.data().email == email){
            console.log(`${doc.data().priviledge}`);
        }
        console.log(`${doc.data().email}`);
        console.log(email);
        });
    }

    TabTitle('Travel Inn | Log In');
    return (
        <div className="formcontainer">
            <form onSubmit={signIn}>
                <input type='email' placeholder="Email" value={email} onChange={updateEmail} className="inputfield"/>
                <input type='password' placeholder="Password" value={password} onChange={updatePassword} className="inputfield"/>
                <input type='submit' value="Login" className='loginBtn'/>
            </form>
            <div className = "permissionPopup">
                <input type = 'email' placeholder ="Email" value = {email} onChange={updateEmail} />
                <input type='submit' value="Check" onClick={()=>verify()}/>
            </div>
            <button className="floatingButton" onClick={()=>checkPermission()}>
                <p>+</p>
            </button>
        </div>
    );
}