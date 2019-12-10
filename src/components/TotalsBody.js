import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import MuiTableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableFooter from '@material-ui/core/TableFooter';

const StyledTableCell = withStyles({
    root: {
      borderBottom: "none",
      fontSize: '48px',
      textAlign: 'center',
      paddingBottom: 0,
    }
  })(MuiTableCell);

  const TableCell = withStyles({
    root: {
      borderBottom: "none",
      fontSize: '12px',
      textAlign: 'center',
      paddingTop: 0,
    }
  })(MuiTableCell);


const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
    borderBottom: "none",
  },
  table: {
    minWidth: 650,
    borderBottom: 'none',
    border: 'none'
  },
  borderless: {
      fontSize: '48px',
  }
});

function createData(index, feedback, profit, orders, popularity) {
  return { index, feedback, profit, orders, popularity };
}

const rows = [
  createData(0, 597, '16.6M', '7.5K', '+48%'),
];

export default function TotalsBody() {
  const classes = useStyles();

  return (
    <Paper elevation="0" className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody className={classes.borderless} >
          {rows.map(row => (
            <TableRow className={classes.borderless} key={row.index}>
              <StyledTableCell>
                  {row.feedback}
                  </StyledTableCell>
              <StyledTableCell>{row.profit}</StyledTableCell>
              <StyledTableCell>{row.orders}</StyledTableCell>
              <StyledTableCell>{row.popularity}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
            <TableCell>New Feedbacks</TableCell>
            <TableCell>Total Profit</TableCell>
            <TableCell>New Orders</TableCell>
            <TableCell>Brand Popularity</TableCell>
        </TableFooter>
      </Table>
    </Paper>
  );
}