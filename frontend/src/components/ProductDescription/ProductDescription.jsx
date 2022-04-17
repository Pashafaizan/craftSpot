import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
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

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

export default function ProductDescription({ data }) {
  const classes = useStyles();
  console.log(data);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Name
              </StyledTableCell>
              <StyledTableCell align="center">{data.item_name}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Color
              </StyledTableCell>
              <StyledTableCell align="center">
                {data.item_color}
              </StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Material
              </StyledTableCell>
              <StyledTableCell align="center">{data.material}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Shape
              </StyledTableCell>
              <StyledTableCell align="center">
                {data.item_shape}
              </StyledTableCell>
            </StyledTableRow>
           {data.item_weight!=undefined && <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Weight
              </StyledTableCell>
              <StyledTableCell align="center">
                {data.item_weight.weight} {data.item_weight.unit}
              </StyledTableCell>
            </StyledTableRow>}

            {data.item_dimensions != undefined && (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Size
                </StyledTableCell>
                <StyledTableCell align="center">
                  {data.item_dimensions.length}x{data.item_dimensions.breadth}x
                  {data.item_dimensions.height} {data.item_dimensions.unit}
                </StyledTableCell>
              </StyledTableRow>
            )}
            {/* <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Description
              </StyledTableCell>
              <StyledTableCell align="center">
                {data.item_description}
              </StyledTableCell>
            </StyledTableRow> */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
