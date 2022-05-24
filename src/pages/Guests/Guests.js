import TabTitle from '../../components/UI/TabTitle';
import TitleCard from '../../components/UI/Titlecard/TitleCard';
import './Guests.scss';
import DataTable from '../../components/UI/DataTable/DataTable';
import { guestRows } from '../../assests/Data/data';

const Guests = () => {
    TabTitle('Travel Inn | Guests');

    const columns = [
      { field: 'id', headerName: 'Guest ID', width: 100 },
      { field: 'name', headerName: 'Guest Name', width: 100  },
      { 
        field: 'roomID', 
        headerName: 'Room ID', 
        width: 120
      },
      {
        field: 'checkIn',
        headerName: 'Check In',
        width: 150,
      },
  
      {
        field: 'checkOut',
        headerName: 'Check Out',
        width: 150,
      },
  
      {
        field: 'status',
        headerName: 'Status',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        renderCell: (params) =>{
          return <div className={`cellwithStatus ${params.row.status}`}>
            {params.row.status}
            </div>
        }
      },
    ];
  
    

    


  return (
    <div className='guests-container'>
        
      <TitleCard pageTitle="Guests"/>
      <div className="dt-w">
        <DataTable rows={guestRows} columns={columns} title="Guest Info" subtitle="List of All Guests" /> 
           
      </div>
    </div>
  )
}

export default Guests;