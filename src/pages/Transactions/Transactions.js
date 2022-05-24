import TitleCard from '../../components/UI/Titlecard/TitleCard';
import './Transactions.scss'
import TabTitle from '../../components/UI/TabTitle'
import DataTable from '../../components/UI/DataTable/DataTable';
import { transactionRows } from '../../assests/Data/data';


const Transactions = () => {

  TabTitle("Travel Inn | Transactions");


  const columns = [
    { field: 'id', headerName: 'Transaction ID', width: 100 },
    { field: 'bookingID', headerName: 'Booking ID', width: 100  },
    { 
      field: 'amount', 
      headerName: 'Amount', 
      width: 120,
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

  

  return (
    <div className="transactions">
      <TitleCard pageTitle='Transactions'/>
      <div className="dt-w">
        <DataTable rows={transactionRows} columns={columns} title="Transaction Info" subtitle="List of Latest Transactions" /> 
           
      </div>
    </div>
  )
}

export default Transactions;