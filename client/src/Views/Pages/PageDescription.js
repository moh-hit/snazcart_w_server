import React, { Component } from "react";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Button from "@material-ui/core/Button";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import SellerCard from "../../Components/SellerCard";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
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
        <div className="col-lg-6 d-flex justify-content-between  allImageAre_productDesc">
          <div className="imgThumbnail">
            <img src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10556648/2019/10/31/bd6b8e02-59c2-442f-a85c-5fdb7177399f1572514970757-Allen-Solly-Men-Sweatshirts-3601572514969206-1.jpg"></img>
            <img src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10556648/2019/10/31/bd6b8e02-59c2-442f-a85c-5fdb7177399f1572514970757-Allen-Solly-Men-Sweatshirts-3601572514969206-1.jpg"></img>
            <img src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10556648/2019/10/31/bd6b8e02-59c2-442f-a85c-5fdb7177399f1572514970757-Allen-Solly-Men-Sweatshirts-3601572514969206-1.jpg"></img>
            <img src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10556648/2019/10/31/bd6b8e02-59c2-442f-a85c-5fdb7177399f1572514970757-Allen-Solly-Men-Sweatshirts-3601572514969206-1.jpg"></img>
          </div>
          <div className=" productImageArea_productDesc">
            <img src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10556648/2019/10/31/bd6b8e02-59c2-442f-a85c-5fdb7177399f1572514970757-Allen-Solly-Men-Sweatshirts-3601572514969206-1.jpg"></img>
          </div>
        </div>
        <div className="col-lg-6 productDetails_productDesc">
          <div className="basicDetails_productDesc">
            <h4 className="productName">
              Men Navy Blue Solid Hooded Sweatshirt
            </h4>
            <h3 className="productPrice">
              ₹ 999<span>Inclusive of all taxes</span>
            </h3>
            <button className="favButton">
              <FavoriteBorderIcon style={{ color: "#ed3c0d" }} />
            </button>
            <button className="buyButton"> Buy Now </button>
            <div className="d-flex justify-content-start socialIcons_productDesc">
              <button className="socialButton">
                <WhatsAppIcon />
              </button>
              <button className="socialButton">
                <FacebookIcon />
              </button>
              <button className="socialButton">
                <TwitterIcon />
              </button>
              <button className="socialButton">
                <PinterestIcon />
              </button>
            </div>
            <SellerCard />
          </div>
          <div className="specificDetails_productDesc">
            <h4>
              Product Details
              <span>
                <ListAltOutlinedIcon fontSize="medium" />
              </span>
            </h4>

            <p>
              Navy Blue solid sweatshirt, has a hood, two pockets, long sleeves
              with printed detail, zip closure, straight hem
            </p>
            <div className="details">
              <h4>Size & Fit</h4>
              <p>The model (height 6') is wearing a size M</p>
            </div>
         
          </div>
        </div>
      </div>
    </div>
  );
}
