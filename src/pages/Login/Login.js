import React from 'react';
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {db} from './../../utils/firebase';
import { collection, getDocs, query, where } from "firebase/firestore"; 
import './Login.scss';
import TabTitle from '../../components/UI/TabTitle';




export default function Login() {
    const navigate= useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [alert, setAlert] = React.useState("");


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
            console.log(user)
            window.localStorage.setItem('password',password);
            window.localStorage.setItem('email',email);
            navigate("/dashboard",  {reload:true});
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            setAlert('Invalid Password, NB: only 3 attempts allowed');
            document.querySelector('.alert').classList.add('active');
            setTimeout(()=> {
                document.querySelector('.alert').classList.remove('active');
                setAlert('');
            },5000);
        });
    }

    const verify= async (e)=>{
        e.preventDefault();
        const querySnapshot = await getDocs(query(collection(db, "admins"), where("email","==",email)));
        if(!querySnapshot.empty){
            signIn();
        }
        else{
            setAlert('Invalid email');
            document.querySelector('.alert').classList.add('active');
            setTimeout(()=> {
                document.querySelector('.alert').classList.remove('active');
                setAlert('');
            },5000);
        }
    }

    // React.useEffect(()=>{
    //     if(verified==true)
           
    //     if(verified != true && verified !=null){
    //         console.log("invalid username or password");
    //     }
    // },[verified])

    TabTitle('Travel Inn | Log In');
    return (
        <div className="formcontainer">

            <div className="alert ">{alert}</div>
            <form onSubmit={verify}>
                <input type='email' placeholder="Email" value={email} onChange={updateEmail} className="inputfield"/>
                <input type='password' placeholder="Password" value={password} onChange={updatePassword} className="inputfield"/>
                <input type='submit' value="Login" className='loginBtn'/>
            </form>
        </div>
    );
}