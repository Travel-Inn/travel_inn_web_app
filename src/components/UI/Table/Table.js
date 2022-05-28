import './Table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ImportExportIcon from '@mui/icons-material/ImportExport';


const ListTable = ({title, subtitle}) => {

    const rows = [
        {RoomId: 'R1546', RoomNum: 'A654', RoomType: 'Classic-Double', BedNum: 2, MaxOccupants: 4},
        {RoomId: 'R2351', RoomNum: 'A535', RoomType: 'Classic', BedNum: 1, MaxOccupants: 2},
        {RoomId: 'R3020', RoomNum: 'A574', RoomType: 'Classic-Large', BedNum: 1, MaxOccupants: 3},
        {RoomId: 'R4523', RoomNum: 'A357', RoomType: 'Presidential', BedNum: 2, MaxOccupants: 4},
        {RoomId: 'R5052', RoomNum: 'A354', RoomType: 'Double-Dose', BedNum: 4, MaxOccupants: 8},
        {RoomId: 'R6069', RoomNum: 'A021', RoomType: 'Classic-Double', BedNum: 2, MaxOccupants: 4},
        {RoomId: 'R7354', RoomNum: 'A654', RoomType: 'Classic', BedNum: 1, MaxOccupants: 2},
        {RoomId: 'R8534', RoomNum: 'A654', RoomType: 'Classic-Large', BedNum: 1, MaxOccupants: 3},
        {RoomId: 'R9354', RoomNum: 'A854', RoomType: 'Presidential', BedNum: 2, MaxOccupants: 4},
        {RoomId: 'R1035', RoomNum: 'A654', RoomType: 'Double-Dose', BedNum: 4, MaxOccupants: 8},
        {RoomId: 'R1135', RoomNum: 'A654', RoomType: 'Classic-Double', BedNum: 2, MaxOccupants: 4},
        {RoomId: 'R1235', RoomNum: 'A654', RoomType: 'Classic', BedNum: 1, MaxOccupants: 2},
        {RoomId: 'R1335', RoomNum: 'A654', RoomType: 'Classic-Large', BedNum: 1, MaxOccupants: 3},
        {RoomId: 'R1442', RoomNum: 'A878', RoomType: 'Presidential', BedNum: 2, MaxOccupants: 4},
        {RoomId: 'R1535', RoomNum: 'A654', RoomType: 'Double-Dose', BedNum: 4, MaxOccupants: 8},
      ];
  return (
    <div className='table-container'>
        <span className="table-title">{title}</span>
        <span className="table-subtitle">{subtitle}</span>

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell align="center" className='tablecell'><ImportExportIcon className='icon' />Room ID</TableCell>
                    <TableCell align="center" className='tablecell' ><ImportExportIcon className='icon' />Room No</TableCell>
                    <TableCell align="center" className='tablecell' ><ImportExportIcon className='icon' />Room Type</TableCell>
                    <TableCell align="center" className='tablecell' ><ImportExportIcon className='icon' />Bed No</TableCell>
                    <TableCell align="center" className='tablecell' ><ImportExportIcon className='icon' />Max Occupants</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.RoomId}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center" className='tablecell'>{row.RoomId}</TableCell>
                            <TableCell align="center" className='tablecell'>{row.RoomNum}</TableCell>
                            <TableCell align="center" className='tablecell'>{row.RoomType}</TableCell>
                            <TableCell align="center" className='tablecell'>{row.BedNum}</TableCell>
                            <TableCell align="center" className='tablecell'>{row.MaxOccupants}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    </div>
  )
}

export default ListTable;