import React from 'react';
import './myInfo.scss'

export default function MyInfo(props){
    return(
        <div className="infoContent">
           <table className="adminInfo">
               <tbody>
                   <tr>
                        <th>First Name:</th><td>{props.adminProfile.fname}</td>
                   </tr>
                   <tr>
                        <th>Last Name:</th><td>{props.adminProfile.lname}</td>
                   </tr>
                   <tr>
                        <th>Email:</th><td>{props.adminProfile.email}</td>
                   </tr>
                   <tr>
                        <th>Mobile number:</th><td>{props.adminProfile.phone}</td>
                   </tr>
                   <tr>
                        <th>Gender:</th><td>{props.adminProfile.sex}</td>
                   </tr>
               </tbody>
           </table>
        </div>
    )
}