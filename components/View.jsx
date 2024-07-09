import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Aadil', 159, 6.0, 24, 4.0),
  createData('Sharjith', 237, 9.0, 37, 4.3),
  createData('afnas', 262, 16.0, 24, 6.0),
  createData('avin', 305, 3.7, 67, 4.3),
  createData('paul', 356, 16.0, 49, 3.9),
];

const View = () => {
  return (
    <div>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ '& td, & th': { border: 2 } }}>
            <TableCell><b>name</b></TableCell>
            <TableCell align="right"><b>Admission no:</b></TableCell>
            <TableCell align="right"><b>Contact no:</b></TableCell>
            <TableCell align="right"><b>Department</b></TableCell>
            <TableCell align="right"><b>Batch</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '& td, & th': { border: 2 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
    </div>
  )
}

export default View