import React from "react";
// import axios from "axios";
// import Spinner from "./Spinner";
// import SearchIcon from "@mui/icons-material/Search";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  //   Container,
  //   TextField,
  //   Card,
  //   CardContent,
  //   InputAdornment,
} from "@mui/material";
const rows = [
  { name: "Frozen Yoghurt", calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Ice Cream", calories: 245, fat: 9.5, carbs: 67, protein: 3.0 },
  { name: "Hamburgers", calories: 456, fat: 4.5, carbs: 82, protein: 9.5 },
  { name: "French fries", calories: 237, fat: 6.4, carbs: 62, protein: 7.45 },
  { name: "whipped cream", calories: 432, fat: 7.8, carbs: 35, protein: 6.45 },
];

class Expenses extends React.Component {
  render() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
      // <div>
      //   Some Content<Link to="/drawer">Click Here!</Link>
      // </div>
    );
  }
}
export default Expenses;
