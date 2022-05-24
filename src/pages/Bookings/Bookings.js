import React from 'react'
import TitleCard from '../../components/UI/Titlecard/TitleCard';
import DataTable from '../../components/UI/DataTable/DataTable';
import './Bookings.scss';
import { bookingRows } from '../../assests/Data/data';

const Bookings = () => {


  const columns = [
    { field: 'id', headerName: 'Booking ID', width: 100 },
    { field: 'guestID', headerName: 'Guest ID', width: 100  },
    { 
      field: 'roomID', 
      headerName: 'Room ID', 
      width: 120,
    },
    {
      field: 'duration',
      headerName: 'Stay Duration',
      width: 150,
    },

    {
      field: 'dateBooked',
      headerName: 'Date Booked',
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
    <div>
      <TitleCard pageTitle="Bookings"/>    
      <div className="dt-w">
        <DataTable rows={bookingRows} columns={columns} title="Booking Info" subtitle="List of Latest Bookings" /> 
      </div>
    </div>
  )
}

export default Bookings;