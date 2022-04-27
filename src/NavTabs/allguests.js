import './allguests.scss';

const AllGuests=()=>{
    return(
        <table>
            <tr>
                <th>Guest</th>
                <th>Order Date</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Room</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>Ben</td>
                <td>{Date().slice(0,15)}</td>
                <td>{Date().slice(0,15)}</td>
                <td>{Date().slice(0,15)}</td>
                <td></td>
                <td><input type="submit" value="Pending" /></td>
            </tr> 
            <tr>
                <td>Ben</td>
                <td>{Date().slice(0,15)}</td>
                <td>{Date().slice(0,15)}</td>
                <td>{Date().slice(0,15)}</td>
                <td></td>
                <td><input type="submit" value="Departed" /></td>
            </tr>  
            <tr>
                <td>Ben</td>
                <td>{Date().slice(0,15)}</td>
                <td>{Date().slice(0,15)}</td>
                <td>{Date().slice(0,15)}</td>
                <td></td>
                <td><input type="submit" value="Booked" /></td>
            </tr>  
            <tr>
                <td>Ben</td>
                <td>{Date().slice(0,15)}</td>
                <td>{Date().slice(0,15)}</td>
                <td>{Date().slice(0,15)}</td>
                <td></td>
                <td><input type="submit" value="Booked" /></td>
            </tr>  
            <tr>
                <td>Ben</td>
                <td>{Date().slice(0,15)}</td>
                <td>{Date().slice(0,15)}</td>
                <td>{Date().slice(0,15)}</td>
                <td></td>
                <td><input type="submit" value="Departed" /></td>
            </tr> 
            
        </table>
    );
}

export default AllGuests;