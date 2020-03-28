import React, { Component } from "react";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  export default function PageDescription() {
    const classes = useStyles();
    return (
      <div className="container-custom pt-3 mb-3">
        <div className="d-flex justify-content-between py-3">
          <a className="breadCrumb">
            Products / Clothes / Ethnic / <strong>Women</strong>
          </a>
        </div>
        <div className="d-flex justify-content-around col-lg-12 productDescArea">
          <div className="col-lg-6 productImageArea_productDesc">
            <img src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10556648/2019/10/31/bd6b8e02-59c2-442f-a85c-5fdb7177399f1572514970757-Allen-Solly-Men-Sweatshirts-3601572514969206-1.jpg"></img>
          </div>
          <div className="col-lg-6 productDetails_productDesc">
            <div className="basicDetails_productDesc">
              <h2 className="productName">Allen Solley</h2>
              <h3 className="productSubName">
                Men Navy Blue Solid Hooded Sweatshirt
              </h3>
              <h3 className="productPrice">₹ 999</h3>
              <p>Inclusive of all taxes</p>
            </div>
            <div className="specificDetails_productDesc">
              <h4>
                Product Details
                <span>
                  <ListAltOutlinedIcon fontSize="medium" />
                </span>
              </h4>

              <p>
                Navy Blue solid sweatshirt, has a hood, two pockets, long
                sleeves with printed detail, zip closure, straight hem
              </p>
              <div className="details">
                  <h4>Size & Fit</h4>
                  <p>The model (height 6') is wearing a size M</p>
              </div>
              <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
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
          {rows.map(row => (
            <TableRow key={row.name}>
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
          </div>
        </div>
      </div>
    );
  
}
