import './DataTable.scss'
import { DataGrid } from '@mui/x-data-grid';




const DataTable = ({title, subtitle, rows, columns}) => {

  

  return (
    <div className='datatable'>
        <span className="title">{title}</span>
        <span className="subtitle">{subtitle}</span>
        <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection

      />

    </div>
  )
}

export default DataTable;