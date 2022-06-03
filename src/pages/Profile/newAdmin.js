import React from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {db} from './../../utils/firebase';
import { collection, addDoc } from "firebase/firestore"; 
import './settings.scss'

export default function NewAdmin(props){
    const [fName, setFname] = React.useState("");
    const [lName, setLname] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [gender, setGender] = React.useState("Male");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const addAdmin = async ()=>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // created 
            updateProfile(userCredential.user, {
                displayName: username
            });
            addDoc(collection(db, "admins"), {
                firstName: fName,
                lastName: lName,
                gender: gender,
                phone: phone,
                name: fName+" "+lName,
                adminID: "",
                priviledged: false,
                email: email,
              }).then(()=>{
                signInWithEmailAndPassword(auth, window.localStorage.getItem('email'), window.localStorage.getItem('password'));
              })
            // ...
              
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
        
      }
    
    const updateFName = (event) => {
        setFname(event.target.value);
    };
    const updateLName = (event) => {
        setLname(event.target.value);
    };
    const updateEmail = (event) => {
        setEmail(event.target.value);
    };
    const updatePhone = (event) => {
        setPhone(event.target.value);
    };
    const updateGender = (event) => {
        setGender(event.target.value);
    };
    const updateUsername = (event) => {
    setUsername(event.target.value);
    };
    const updatePassword = (event) => {
        setPassword(event.target.value);
    };

    return(
        <div className="content">
           {props.adminProfile.pass?<table className="adminInfo">
               <tbody>
                   <tr>
                        <th>First Name:</th>
                        <td><input type="text" name = "fname" value={fName} onChange={updateFName}/></td>
                   </tr>
                   <tr>
                        <th>Last Name:</th>
                        <td><input type="text" name = "lname"value={lName} onChange={updateLName}/></td>
                        <th>UserName:</th>
                        <td><input type="text" name = "username"value={username} onChange={updateUsername}/></td>
                   </tr>
                   <tr>
                        <th>Email:</th><td><input type="email" name="email" value={email} onChange={updateEmail}/></td>
                        <th>Password:</th><td><input type="password" name="password" value={password} onChange={updatePassword}/></td>
                   </tr>
                   <tr>
                        <th>Mobile number:</th><td><input type="text" name = "phone" value={phone} onChange={updatePhone}/></td>
                   </tr>
                   <tr>
                        <th>Gender:</th>
                        <td>
                            <select name = 'gender' value ={gender} onChange={updateGender}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </td>
                   </tr>
                   <tr>
                        <th></th><td><input type="submit" value="Add" name="add" onClick={addAdmin}/></td>
                   </tr>
               </tbody>
           </table>:<p>You're not authorized to add new admins</p>}
        </div>
    )
}