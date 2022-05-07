import './Table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ImportExportIcon from '@mui/icons-material/ImportExport';


const ListTable = () => {

    const rows = [
        {id: 1, RoomNum: 'R365', RoomType: 'Classic-Double', BedNum: 2, MaxOccupants: 4},
        {id: 2, RoomNum: 'R325', RoomType: 'Classic', BedNum: 1, MaxOccupants: 2},
        {id: 3, RoomNum: 'R465', RoomType: 'Classic-Large', BedNum: 1, MaxOccupants: 3},
        {id: 4, RoomNum: 'P365', RoomType: 'Presidential', BedNum: 2, MaxOccupants: 4},
        {id: 5, RoomNum: 'R865', RoomType: 'Double-Dose', BedNum: 4, MaxOccupants: 8},
        {id: 6, RoomNum: 'R665', RoomType: 'Classic-Double', BedNum: 2, MaxOccupants: 4},
        {id: 7, RoomNum: 'R365', RoomType: 'Classic', BedNum: 1, MaxOccupants: 2},
        {id: 8, RoomNum: 'R365', RoomType: 'Classic-Large', BedNum: 1, MaxOccupants: 3},
        {id: 9, RoomNum: 'P368', RoomType: 'Presidential', BedNum: 2, MaxOccupants: 4},
        {id: 10, RoomNum: 'R365', RoomType: 'Double-Dose', BedNum: 4, MaxOccupants: 8},
        {id: 11, RoomNum: 'R365', RoomType: 'Classic-Double', BedNum: 2, MaxOccupants: 4},
        {id: 12, RoomNum: 'R365', RoomType: 'Classic', BedNum: 1, MaxOccupants: 2},
        {id: 13, RoomNum: 'R365', RoomType: 'Classic-Large', BedNum: 1, MaxOccupants: 3},
        {id: 14, RoomNum: 'P115', RoomType: 'Presidential', BedNum: 2, MaxOccupants: 4},
        {id: 15, RoomNum: 'R365', RoomType: 'Double-Dose', BedNum: 4, MaxOccupants: 8},
      ];
  return (
    <div className='table-container'>
        <span className="table-title">Room Info</span>
        <span className="table-subtitle">All Available Rooms</span>

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
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center" className='tablecell'>{row.id}</TableCell>
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