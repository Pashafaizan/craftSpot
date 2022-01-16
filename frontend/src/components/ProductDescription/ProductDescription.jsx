import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

export default function ProductDescription({data}) {
  const classes = useStyles();

  return (
    <div style={{width:"100%",display:'flex',alignItems:"center",justifyContent:"center"}}>
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="customized table">
 
        <TableBody>
         
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
              Item Name
              </StyledTableCell>
              <StyledTableCell align="center">{data.item_name}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
              Item price
              </StyledTableCell>
              <StyledTableCell align="center">Rs.   {data.item_price}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
              Item desciption
              </StyledTableCell>
              <StyledTableCell align="center">{data.item_description}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
               Place of Origin
              </StyledTableCell>
              <StyledTableCell align="center">{data.place_of_origin}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
               Item Color
              </StyledTableCell>
              <StyledTableCell align="center">{data.item_color}</StyledTableCell>
            </StyledTableRow>

            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
               Material
              </StyledTableCell>
              <StyledTableCell align="center">{data.material}</StyledTableCell>
            </StyledTableRow>

            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
               Type
              </StyledTableCell>
              <StyledTableCell align="center">{data.item_type}</StyledTableCell>
            </StyledTableRow>
     
            
           
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
