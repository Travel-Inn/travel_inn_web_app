import React from 'react';
import './settings.scss'

export default function Settings(props){
    const [fName, setFname] = React.useState("");
    const [lName, setLname] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [gender, setGender] = React.useState("");

    React.useEffect(()=>{
        if(props.adminProfile.fname!=null){
            setFname(props.adminProfile.fname);
            setLname(props.adminProfile.lname);
            setEmail(props.adminProfile.email);
            setPhone(props.adminProfile.phone);
            setGender(props.adminProfile.sex);
        }
    },[props.adminProfile])
    return(
        <div className="content">
           <table className="adminInfo">
               <tbody>
                   <tr>
                       <th>Edit Information</th>
                   </tr>
                   <tr>
                        <th>First Name:</th>
                        <td><input type="text" name = "fname" value={fName} onChange={(text)=>setFname(text.value)}/></td>
                   </tr>
                   <tr>
                        <th>Last Name:</th>
                        <td><input type="text" name = "lname"value={lName} onChange={(text)=>setLname(text.value)}/></td>
                   </tr>
                   <tr>
                        <th>Email:</th><td><input type="email" name="email" value={email} onChange={(text)=>setEmail(text.value)}/></td>
                   </tr>
                   <tr>
                        <th>Mobile number:</th><td><input type="text" name = "phone" value={phone} onChange={(text)=>setPhone(text.value)}/></td>
                   </tr>
                   <tr>
                        <th>Gender:</th>
                        <td>
                            <select name = 'gender' value ={gender} onChange={(text)=>setGender(text.value)}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </td>
                   </tr>
                   <tr>
                        <th></th><td><input type="submit" value="Save" name="save" /></td>
                   </tr>
               </tbody>
           </table>
        </div>
    )
}