import TitleCard from '../../components/UI/Titlecard/TitleCard';
import './Transactions.scss'
import TabTitle from '../../components/UI/TabTitle'
import DataTable from '../../components/UI/DataTable/DataTable';
import Widget from '../../components/UI/widget/Widget'


const Transactions = () => {

  TabTitle("Travel Inn | Transactions");


  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'bookingID', headerName: 'Booking ID', width: 100  },
    { 
      field: 'amount', 
      headerName: 'Amount', 
      width: 100, 
      type: 'number',
      renderCell: (params) =>{
        return <div>
          {`$${params.row.amount}`}
          </div>
      }
    },
    {
      field: 'paymentMethod',
      headerName: 'Payment Method',
      width: 150,
    },

    {
      field: 'dateCompleted',
      headerName: 'Date Completed',
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

  const rows = [
    { id: 1, bookingID: 'Snow', amount: 50, paymentMethod: 'cash', dateCompleted:45, status: 'successful' },
    { id: 2, bookingID: 'Lannister', amount: 50, paymentMethod: 'onilne', dateCompleted:45, status: 'pending' },
    { id: 3, bookingID: 'Lannister', amount: 50, paymentMethod: 'online', dateCompleted:45, status: 'pending' },
    { id: 4, bookingID: 'Stark', amount: 50, paymentMethod: 'online', dateCompleted:45, status: 'failed' },
    { id: 5, bookingID: 'Targaryen', amount: 50, paymentMethod: 'cash', dateCompleted:45, status: 'failed' },
    { id: 6, bookingID: 'Melisandre', amount: 50, paymentMethod: 'online', dateCompleted:45, status: 'successful' },
    { id: 7, bookingID: 'Clifford', amount: 50, paymentMethod: 'cash', dateCompleted:45, status: 'successful' },
    { id: 8, bookingID: 'Frances', amount: 50, paymentMethod: 'cash', dateCompleted:45, status: 'pending' },
    { id: 9, bookingID: 'Roxie', amount: 50, paymentMethod: 'online', dateCompleted:45, status: 'failed' },
    { id: 10, bookingID: 'Roxie', amount: 50, paymentMethod: 'online', dateCompleted:45, status: 'failed' },

  ];

  return (
    <div className="transactions">
      <TitleCard pageTitle='Transactions'/>
      <div className="dt-w">
        <DataTable rows={rows} columns={columns} title="Transaction Info" subtitle="List of Latest Transactions"/> 
        <div className="trans-widgets">
          <Widget />
          <Widget />
        </div>   
      </div>
    </div>
  )
}

export default Transactions;