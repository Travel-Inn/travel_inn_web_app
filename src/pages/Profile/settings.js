import React from 'react';
import './settings.scss'

export default function Settings(){
    const [fName, setFname] = React.useState("Mersharch");
    const [lName, setLname] = React.useState("Wonder");
    const [email, setEmail] = React.useState("wonersh@307project.com");
    const [phone, setPhone] = React.useState("0551540686");
    const [gender, setGender] = React.useState("Mersharch");
    return(
        <div className="content">
           <table>
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
                        <th>Mobile number:</th><td><input type="number" name = "phone" value={phone} onChange={(text)=>setPhone(text.value)}/></td>
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