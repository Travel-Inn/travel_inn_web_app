import React from 'react';
import './myInfo.scss'

export default function MyInfo(){
    return(
        <div className="infoContent">
           <table className="adminInfo">
               <tbody>
                   <tr>
                        <th>First Name:</th><td>Mersharch</td>
                   </tr>
                   <tr>
                        <th>Last Name:</th><td>Wonder</td>
                   </tr>
                   <tr>
                        <th>Email:</th><td>wonersh@307project.com</td>
                   </tr>
                   <tr>
                        <th>Mobile number:</th><td>0551540686</td>
                   </tr>
                   <tr>
                        <th>Gender:</th><td>Male</td>
                   </tr>
               </tbody>
           </table>
        </div>
    )
}